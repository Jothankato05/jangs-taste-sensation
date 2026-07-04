import { useState, type FormEvent } from "react";
import { SectionHeading } from "../components/core/SectionHeading";
import { Button } from "../components/core/Button";
import { Divider } from "../components/core/Divider";
import { Input } from "../components/forms/Input";
import { Select } from "../components/forms/Select";
import { Radio } from "../components/forms/Radio";
import { Checkbox } from "../components/forms/Checkbox";
import { Switch } from "../components/forms/Switch";
import { Dialog } from "../components/overlay/Dialog";
import { Toast } from "../components/overlay/Toast";

const PARTY_SIZES = ["1", "2", "3", "4", "5", "6", "Party of 7+"];
const TIMES = ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];
const SEATING = ["Counter", "Table", "Private Room"] as const;

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  seating: (typeof SEATING)[number];
  occasion: boolean;
  notifications: boolean;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  partySize: "",
  seating: "Counter",
  occasion: false,
  notifications: true,
};

export function Reserve() {
  const [form, setForm] = useState<FormState>(initialState);
  const [confirmed, setConfirmed] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((f) => ({ ...f, [key]: value }));

  const valid = form.name && form.email && form.date && form.time && form.partySize;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setConfirmed(true);
  };

  const closeConfirmation = () => {
    setConfirmed(false);
    setToastOpen(true);
  };

  return (
    <div>
      <section style={{ padding: "var(--space-9) var(--gutter) var(--space-7)", textAlign: "center" }}>
        <SectionHeading kicker="Visit" title="Reserve Your Table" subtitle="Reservations open six weeks out." />
      </section>

      <section style={{ maxWidth: 640, margin: "0 auto", padding: "0 var(--gutter) var(--space-9)" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Input label="Full Name" value={form.name} onChange={(v) => set("name", v)} placeholder="Your name" required />
            <Input label="Email" type="email" value={form.email} onChange={(v) => set("email", v)} placeholder="you@example.com" required />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Input label="Phone" type="tel" value={form.phone} onChange={(v) => set("phone", v)} placeholder="(000) 000-0000" />
            <Select label="Party Size" value={form.partySize} onChange={(v) => set("partySize", v)} options={PARTY_SIZES} placeholder="Select size" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Input label="Date" type="date" value={form.date} onChange={(v) => set("date", v)} required />
            <Select label="Time" value={form.time} onChange={(v) => set("time", v)} options={TIMES} placeholder="Select time" />
          </div>

          <Divider />

          <div>
            <span style={{ display: "block", fontSize: 10, fontWeight: "var(--weight-medium)", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: 16 }}>
              Seating Preference
            </span>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {SEATING.map((s) => (
                <Radio key={s} label={s} checked={form.seating === s} onChange={() => set("seating", s)} />
              ))}
            </div>
          </div>

          <Divider />

          <Checkbox label="This is for a special occasion" checked={form.occasion} onChange={(v) => set("occasion", v)} />
          <Switch label="Send me reservation reminders" checked={form.notifications} onChange={(v) => set("notifications", v)} />

          <Button type="submit" size="lg" variant="primary" disabled={!valid} style={{ marginTop: 8, alignSelf: "flex-start" }}>
            Confirm Reservation
          </Button>
        </form>
      </section>

      <Dialog open={confirmed} kicker="Reservation" title="Your Table Is Waiting" onClose={closeConfirmation}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
          <p style={{ margin: 0 }}>
            {form.partySize} · {form.date || "Date pending"} · {form.time || "Time pending"}
          </p>
          <p style={{ margin: 0 }}>{form.seating} seating</p>
          <p style={{ margin: 0, color: "var(--text-tertiary)" }}>A confirmation has been sent to {form.email}.</p>
        </div>
        <Button variant="outline" style={{ marginTop: 28 }} onClick={closeConfirmation}>
          Done
        </Button>
      </Dialog>

      <Toast open={toastOpen} message="Reservation Confirmed" detail="See you at the counter." onClose={() => setToastOpen(false)} />
    </div>
  );
}
