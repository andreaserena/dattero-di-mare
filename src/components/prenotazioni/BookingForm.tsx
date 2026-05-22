'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { DayPicker } from 'react-day-picker';
import { format, addDays, startOfDay } from 'date-fns';
import { it } from 'date-fns/locale';
import { motion } from 'framer-motion';
import {
  CalendarDays, Clock, Users, Phone, Mail, User, FileText, CheckCircle,
} from 'lucide-react';
import 'react-day-picker/style.css';

const TIME_SLOTS = ['19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'];

const tomorrow = addDays(startOfDay(new Date()), 1);

const schema = z.object({
  name: z.string().min(2, 'Il nome deve avere almeno 2 caratteri'),
  phone: z.string().min(7, 'Inserisci un numero di telefono valido'),
  email: z.string().refine(
    (val) => val === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    { message: 'Email non valida' }
  ),
  date: z.date()
    .refine((d) => d >= tomorrow, { message: 'La data deve essere futura' }),
  time: z.string().min(1, 'Seleziona un orario'),
  guests: z.number().min(1, 'Minimo 1 ospite').max(20, 'Massimo 20 ospiti'),
  notes: z.string().max(500, 'Massimo 500 caratteri').optional(),
});

type FormData = z.infer<typeof schema>;

export default function BookingForm() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { guests: 2, email: '', notes: '' },
  });

  const guests = watch('guests') ?? 2;

  async function onSubmit(data: FormData) {
    setServerError(null);
    const res = await fetch('/api/prenotazioni', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email || undefined,
        date: format(data.date, 'yyyy-MM-dd'),
        time: data.time,
        guests: data.guests,
        notes: data.notes || undefined,
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setServerError(body.message ?? "Errore durante l'invio. Riprova più tardi.");
      return;
    }

    setSuccess(true);
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto text-center py-24 px-4"
      >
        <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-teal-600" />
        </div>
        <h2 className="font-playfair text-3xl font-bold text-slate-800 mb-4">
          Prenotazione ricevuta!
        </h2>
        <p className="text-stone-500 leading-relaxed">
          Grazie per aver scelto il Dattero di Mare.<br />
          La contatteremo al più presto per confermare il suo tavolo.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto px-4 py-12 space-y-8"
    >
      {/* Name + Phone */}
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Nome e cognome" icon={<User className="w-4 h-4" />} error={errors.name?.message} required>
          <input
            {...register('name')}
            placeholder="Mario Rossi"
            className={inputCls(!!errors.name)}
          />
        </Field>
        <Field label="Telefono" icon={<Phone className="w-4 h-4" />} error={errors.phone?.message} required>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+39 333 0000000"
            className={inputCls(!!errors.phone)}
          />
        </Field>
      </div>

      {/* Email */}
      <Field
        label="Email"
        icon={<Mail className="w-4 h-4" />}
        error={errors.email?.message}
        hint="Facoltativa — per ricevere la conferma"
      >
        <input
          {...register('email')}
          type="email"
          placeholder="mario@esempio.it"
          className={inputCls(!!errors.email)}
        />
      </Field>

      {/* Date picker */}
      <div>
        <p className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
          <CalendarDays className="w-4 h-4 text-amber-500" />
          Data <span className="text-red-400">*</span>
        </p>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DayPicker
              mode="single"
              selected={field.value instanceof Date && !isNaN(field.value.getTime()) ? field.value : undefined}
              onSelect={(d) => field.onChange(d)}
              disabled={{ before: tomorrow }}
              locale={it}
              className="border border-stone-200 rounded-xl bg-white p-2 inline-block"
            />
          )}
        />
        {errors.date && (
          <p className="mt-1 text-sm text-red-500">
            {errors.date.message ?? 'Seleziona una data'}
          </p>
        )}
      </div>

      {/* Time slots */}
      <div>
        <p className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
          <Clock className="w-4 h-4 text-amber-500" />
          Orario <span className="text-red-400">*</span>
        </p>
        <Controller
          control={control}
          name="time"
          render={({ field }) => (
            <div className="flex flex-wrap gap-2">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => field.onChange(slot)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                    field.value === slot
                      ? 'bg-amber-500 text-slate-900 border-amber-500'
                      : 'border-stone-200 text-slate-600 hover:border-amber-300 hover:bg-amber-50'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          )}
        />
        {errors.time && (
          <p className="mt-1 text-sm text-red-500">{errors.time.message}</p>
        )}
      </div>

      {/* Guest counter */}
      <div>
        <p className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-3">
          <Users className="w-4 h-4 text-amber-500" />
          Numero di ospiti <span className="text-red-400">*</span>
        </p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setValue('guests', Math.max(1, guests - 1), { shouldValidate: true })}
            className="w-10 h-10 rounded-full border border-stone-300 text-slate-700 hover:border-amber-400 transition-colors flex items-center justify-center text-xl leading-none"
          >
            −
          </button>
          <span className="w-8 text-center text-xl font-semibold text-slate-800 tabular-nums">
            {guests}
          </span>
          <button
            type="button"
            onClick={() => setValue('guests', Math.min(20, guests + 1), { shouldValidate: true })}
            className="w-10 h-10 rounded-full border border-stone-300 text-slate-700 hover:border-amber-400 transition-colors flex items-center justify-center text-xl leading-none"
          >
            +
          </button>
        </div>
        {errors.guests && (
          <p className="mt-1 text-sm text-red-500">{errors.guests.message}</p>
        )}
      </div>

      {/* Notes */}
      <Field
        label="Note"
        icon={<FileText className="w-4 h-4" />}
        error={errors.notes?.message}
        hint="Allergie, esigenze particolari, tavolo esterno…"
      >
        <textarea
          {...register('notes')}
          rows={3}
          className={`${inputCls(!!errors.notes)} resize-none`}
        />
      </Field>

      {/* Server error */}
      {serverError && (
        <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200">
          <p className="text-sm text-red-600">{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-semibold rounded-full transition-colors"
      >
        {isSubmitting ? 'Invio in corso…' : 'Conferma prenotazione'}
      </button>
    </motion.form>
  );
}

function Field({
  label,
  icon,
  error,
  hint,
  required,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
        <span className="text-amber-500">{icon}</span>
        {label}
        {required && <span className="text-red-400">*</span>}
      </p>
      {hint && <p className="text-xs text-stone-400 mb-1.5">{hint}</p>}
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return [
    'w-full px-4 py-2.5 rounded-lg border text-slate-800 placeholder-stone-400 bg-white',
    'focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition',
    hasError ? 'border-red-300' : 'border-stone-200 hover:border-stone-300',
  ].join(' ');
}
