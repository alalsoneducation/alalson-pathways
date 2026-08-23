import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";

import { WhatsAppLink } from "@/components/WhatsAppButton";
import { programs } from "@/data/programs";
import { branchLabel, branches } from "@/data/site";

/**
 * نموذج التسجيل/الاستفسار.
 *
 * لا يحتاج أي خدمة مدفوعة: افتراضياً يُرسل الطلب عبر WhatsApp.
 * لربطه لاحقاً بـ Google Forms أو البريد أو Supabase/Firebase أو CRM
 * يكفي تعديل الدالة submitRegistration في src/lib/registration.ts
 * دون تغيير تصميم الموقع أو بقية المكونات.
 */

const schema = z.object({
  fullName: z.string().trim().min(3, "الرجاء إدخال الاسم الكامل").max(100, "الاسم طويل جداً"),
  phone: z
    .string()
    .trim()
    .min(7, "الرجاء إدخال رقم هاتف صحيح")
    .max(20, "رقم الهاتف طويل جداً")
    .regex(/^[0-9+\-\s]+$/, "رقم الهاتف يجب أن يحتوي أرقاماً فقط"),
  email: z.union([z.literal(""), z.string().trim().email("بريد إلكتروني غير صحيح").max(255)]),
  program: z.string().trim().min(1, "الرجاء اختيار البرنامج").max(150),
  branch: z.string().trim().min(1, "الرجاء اختيار الفرع").max(150),
  period: z.string().trim().min(1, "الرجاء اختيار الفترة الدراسية").max(60),
  notes: z.string().trim().max(1000, "الملاحظات طويلة جداً"),
});

export type RegistrationValues = z.infer<typeof schema>;

const periods = ["الفترة الصباحية", "الفترة المسائية", "حسب المتاح"];

const fieldClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-cyan focus:ring-2 focus:ring-ring/40";

export function buildRegistrationMessage(v: RegistrationValues) {
  return [
    "طلب تسجيل جديد – معهد الألسن الدولي",
    `الاسم: ${v.fullName}`,
    `الهاتف: ${v.phone}`,
    v.email ? `البريد: ${v.email}` : null,
    `البرنامج: ${v.program}`,
    `الفرع: ${v.branch}`,
    `الفترة: ${v.period}`,
    v.notes ? `ملاحظات: ${v.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export function RegistrationForm({ defaultProgram }: { defaultProgram?: string | undefined }) {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: "",
    phone: "",
    email: "",
    program: defaultProgram ?? "",
    branch: "",
    period: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationValues, string>>>({});
  const [submitted, setSubmitted] = useState<RegistrationValues | null>(null);

  const set = <K extends keyof RegistrationValues>(k: K, v: RegistrationValues[K]) =>
    setValues((prev) => ({ ...prev, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<keyof RegistrationValues, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof RegistrationValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(result.data);
  };

  if (submitted) {
    return (
      <div className="card-elevated flex flex-col items-center gap-4 p-8 text-center">
        <CheckCircle2 className="size-14 text-whatsapp" aria-hidden />
        <h3 className="text-xl font-extrabold text-navy">تم استلام طلبك بنجاح.</h3>
        <p className="text-sm text-muted-foreground">
          سيتم التواصل معك من إدارة معهد الألسن الدولي.
        </p>
        <p className="text-sm text-muted-foreground">
          لتسريع الإجراءات يمكنك إرسال الطلب مباشرة عبر واتساب:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <WhatsAppLink message={buildRegistrationMessage(submitted)}>
            إرسال الطلب عبر WhatsApp
          </WhatsAppLink>
          <button
            type="button"
            onClick={() => setSubmitted(null)}
            className="rounded-xl border border-border px-4 py-2.5 text-sm font-bold text-navy hover:bg-muted"
          >
            تسجيل طلب آخر
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-elevated grid gap-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="fullName" label="الاسم الكامل" error={errors.fullName}>
          <input
            id="fullName"
            className={fieldClass}
            value={values.fullName}
            maxLength={100}
            onChange={(e) => set("fullName", e.target.value)}
            placeholder="مثال: محمد أحمد"
            required
          />
        </Field>

        <Field id="phone" label="رقم الهاتف" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            dir="ltr"
            className={fieldClass}
            value={values.phone}
            maxLength={20}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="7XXXXXXXX"
            required
          />
        </Field>

        <Field id="email" label="البريد الإلكتروني (اختياري)" error={errors.email}>
          <input
            id="email"
            type="email"
            dir="ltr"
            className={fieldClass}
            value={values.email}
            maxLength={255}
            onChange={(e) => set("email", e.target.value)}
            placeholder="name@example.com"
          />
        </Field>

        <Field id="program" label="البرنامج المطلوب" error={errors.program}>
          <select
            id="program"
            className={fieldClass}
            value={values.program}
            onChange={(e) => set("program", e.target.value)}
            required
          >
            <option value="">اختر البرنامج</option>
            {programs.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </Field>

        <Field id="branch" label="الفرع" error={errors.branch}>
          <select
            id="branch"
            className={fieldClass}
            value={values.branch}
            onChange={(e) => set("branch", e.target.value)}
            required
          >
            <option value="">اختر الفرع</option>
            {branches.map((b) => (
              <option key={b.id} value={branchLabel(b)}>
                {branchLabel(b)}
              </option>
            ))}
          </select>
        </Field>

        <Field id="period" label="الفترة الدراسية" error={errors.period}>
          <select
            id="period"
            className={fieldClass}
            value={values.period}
            onChange={(e) => set("period", e.target.value)}
            required
          >
            <option value="">اختر الفترة</option>
            {periods.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="notes" label="ملاحظات" error={errors.notes}>
        <textarea
          id="notes"
          rows={4}
          maxLength={1000}
          className={fieldClass}
          value={values.notes}
          onChange={(e) => set("notes", e.target.value)}
          placeholder="أي معلومات إضافية ترغب بإرسالها"
        />
      </Field>

      <div className="grid gap-2 sm:grid-cols-2">
        <button
          type="submit"
          className="rounded-xl bg-brand-gradient px-5 py-3 text-sm font-bold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
        >
          إرسال طلب التسجيل
        </button>
        <WhatsAppLink
          variant="outline"
          className="py-3"
          message="السلام عليكم، أرغب في التسجيل في أحد برامج معهد الألسن الدولي."
        >
          التسجيل عبر WhatsApp
        </WhatsAppLink>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-navy">
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs font-semibold text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
