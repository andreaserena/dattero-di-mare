'use client';

import { useState, useEffect } from 'react';
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

const LUNCH_SLOTS = ['12:30', '13:00', '13:30', '14:00', '14:30'];
const DINNER_SLOTS = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];

function getSlotsForDate(date: Date | undefined): string[] {
  if (!date) return [...LUNCH_SLOTS, ...DINNER_SLOTS];
  const day = date.getDay();
  if (day === 0) return LUNCH_SLOTS;
  return [...LUNCH_SLOTS, ...DINNER_SLOTS];
}

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
  const selectedDate = watch('date');
  const selectedTime = watch('time');

  const availableSlots = getSlotsForDate(selectedDate);
  const isSunday = selectedDate?.getDay() === 0;

  useEffect(() => {
    if (selectedTime && !availableSlots.includes(selectedTime)) {
      setValue('time', '');
    }
  }, [selectedDate, selectedTime, availableSlots, setValue]);

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
      setServerError(body.message ?? `Errore durante l'invio. Riprova più tardi.`);
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
        <div className="w-20 h-20 border border-brine/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-9 h-9 text-brine" />
        </div>
        <h2 className="font-display italic text-3xl font-medium text-sea-text mb-4">
          Prenotazione ricevuta!
        </h2>
        <p className="font-sans text-sea-soft leading-relaxed">
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
        <p className="font-sans flex items-center gap-2 text-sm font-medium text-sea-text/70 mb-3">
          <CalendarDays className="w-4 h-4 text-brine" />
          Data <span className="text-terra">*</span>
        </p>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DayPicker
              mode="single"
              selected={field.value instanceof Date && !isNaN(field.value.getTime()) ? field.value : undefined}
              onSelect={(d) => field.onChange(d)}
              disabled={[{ dayOfWeek: [1] }, { before: tomorrow }]}
              locale={it}
              className="border border-sea/10 bg-white p-2 inline-block"
            />
          )}
        />
        {errors.date && (
          <p className="mt-1 font-sans text-sm text-terra">
            {errors.date.message ?? 'Seleziona una data'}
          </p>
        )}
      </div>

      {/* Sunday notice */}
      {isSunday && (
        <div className="px-4 py-3 border border-brine/25 bg-brine/5">
          <p className="font-sans text-sm text-brine-deep">
            Domenica: solo pranzo 12:30 – 15:00
          </p>
        </div>
      )}

      {/* Time slots */}
      <div>
        <p className="font-sans flex items-center gap-2 text-sm font-medium text-sea-text/70 mb-3">
          <Clock className="w-4 h-4 text-brine" />
          Orario <span className="text-terra">*</span>
        </p>
        <Controller
          control={control}
          name="time"
          render={({ field }) => (
            <div className="flex flex-wrap gap-2">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => field.onChange(slot)}
                  className={`font-sans px-4 py-2 text-sm font-medium transition-colors border ${
                    field.value === slot
                      ? 'bg-sea text-sand border-sea'
                      : 'border-sea/15 text-sea-soft hover:border-brine/50 hover:text-sea-text'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          )}
        />
        {errors.time && (
          <p className="mt-1 font-sans text-sm text-terra">{errors.time.message}</p>
        )}
      </div>

      {/* Guest counter */}
      <div>
        <p className="font-sans flex items-center gap-2 text-sm font-medium text-sea-text/70 mb-3">
          <Users className="w-4 h-4 text-brine" />
          Numero di ospiti <span className="text-terra">*</span>
        </p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setValue('guests', Math.max(1, guests - 1), { shouldValidate: true })}
            className="font-sans w-10 h-10 border border-sea/15 text-sea-soft hover:border-brine transition-colors flex items-center justify-center text-xl leading-none"
          >
            −
          </button>
          <span className="font-sans w-8 text-center text-xl font-semibold text-sea-text tabular-nums">
            {guests}
          </span>
          <button
            type="button"
            onClick={() => setValue('guests', Math.min(20, guests + 1), { shouldValidate: true })}
            className="font-sans w-10 h-10 border border-sea/15 text-sea-soft hover:border-brine transition-colors flex items-center justify-center text-xl leading-none"
          >
            +
          </button>
        </div>
        {errors.guests && (
          <p className="mt-1 font-sans text-sm text-terra">{errors.guests.message}</p>
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
        <div className="px-4 py-3 border border-terra/30 bg-terra/5">
          <p className="font-sans text-sm text-terra">{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="font-sans w-full py-4 bg-sea hover:bg-sea-light disabled:opacity-60 disabled:cursor-not-allowed text-sand font-semibold transition-colors"
      >
        {isSubmitting ? `Invio in corso…` : 'Conferma prenotazione'}
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
      <p className="font-sans flex items-center gap-2 text-sm font-medium text-sea-text/70 mb-1.5">
        <span className="text-brine">{icon}</span>
        {label}
        {required && <span className="text-terra">*</span>}
      </p>
      {hint && <p className="font-sans text-xs text-sea-soft mb-1.5">{hint}</p>}
      {children}
      {error && <p className="mt-1 font-sans text-sm text-terra">{error}</p>}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return [
    'w-full px-4 py-2.5 border text-sea-text placeholder-sea-soft/50 bg-white font-sans text-sm',
    'focus:outline-none focus:ring-1 focus:ring-brine/40 transition',
    hasError ? 'border-terra/40' : 'border-sea/15 hover:border-sea/25',
  ].join(' ');
}
