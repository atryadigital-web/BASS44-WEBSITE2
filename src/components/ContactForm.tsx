import { FormEvent, useState } from "react";

type Status = "idle" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend yet: the message is only acknowledged on screen.
    setStatus("sent");
    e.currentTarget.reset();
  };

  return (
    <form className="cform" onSubmit={onSubmit} onChange={() => status === "sent" && setStatus("idle")}>
      <h4>پیام به ما</h4>
      <div className="cform-row">
        <input name="name" type="text" placeholder="نام و نام خانوادگی" autoComplete="name" required aria-label="نام و نام خانوادگی" />
        <input name="phone" type="tel" inputMode="tel" dir="ltr" placeholder="شماره تماس" autoComplete="tel" required pattern="[0-9۰-۹+\-\s]{7,}" title="شماره تماس معتبر وارد کنید" aria-label="شماره تماس" />
      </div>
      <textarea name="message" rows={3} placeholder="پیام شما" required aria-label="پیام شما" />
      <div className="cform-foot">
        <button type="submit" className="btn btn-primary btn-sm">
          ارسال پیام
        </button>
        {status === "sent" && (
          <span className="cform-ok" role="status">
            پیام شما ثبت شد؛ به‌زودی تماس می‌گیریم.
          </span>
        )}
      </div>
    </form>
  );
}
