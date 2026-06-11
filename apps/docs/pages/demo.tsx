import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  Button,
  Input,
  Textarea,
  Label,
  Checkbox,
  Switch,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Separator,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Progress,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectSeparator,
} from '@lumina-ui/react'

/* ── Shared inline style primitives ─────────────── */

const glass: React.CSSProperties = {
  background: 'oklch(1 0 0 / 4%)',
  border: '1px solid oklch(1 0 0 / 9%)',
  borderRadius: '1rem',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
}

const sectionLabel: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.375rem',
  fontSize: '0.7rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'oklch(0.63 0.22 265)',
  background: 'oklch(0.63 0.22 265 / 12%)',
  border: '1px solid oklch(0.63 0.22 265 / 25%)',
  borderRadius: '9999px',
  padding: '0.25rem 0.75rem',
  marginBottom: '1.25rem',
}

function DemoCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ ...glass, padding: '1.5rem', ...style }}>
      {children}
    </div>
  )
}

function Row({ children, wrap }: { children: React.ReactNode; wrap?: boolean }) {
  return (
    <div style={{ display: 'flex', flexWrap: wrap ? 'wrap' : 'nowrap', gap: '0.625rem', alignItems: 'center' }}>
      {children}
    </div>
  )
}

function Divider() {
  return <div style={{ height: '1px', background: 'oklch(1 0 0 / 8%)', margin: '1.25rem 0' }} />
}

/* ── Button showcase ─────────────────────────────── */

function ButtonsSection() {
  const [loadingId, setLoadingId] = useState<string | null>(null)

  function handleLoad(id: string) {
    setLoadingId(id)
    setTimeout(() => setLoadingId(null), 2000)
  }

  return (
    <div>
      <div style={sectionLabel}>Button</div>
      <DemoCard>
        <p style={{ fontSize: '0.75rem', color: 'oklch(0.52 0.03 265)', marginBottom: '1rem' }}>Variants</p>
        <Row wrap>
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link button</Button>
        </Row>
        <Divider />
        <p style={{ fontSize: '0.75rem', color: 'oklch(0.52 0.03 265)', marginBottom: '1rem' }}>Sizes & states</p>
        <Row wrap>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button
            variant="default"
            loading={loadingId === 'a'}
            onClick={() => handleLoad('a')}
          >
            {loadingId === 'a' ? 'Saving…' : 'Click to load'}
          </Button>
          <Button
            variant="destructive"
            loading={loadingId === 'b'}
            onClick={() => handleLoad('b')}
          >
            Delete
          </Button>
          <Button disabled>Disabled</Button>
        </Row>
      </DemoCard>
    </div>
  )
}

/* ── Inputs section ──────────────────────────────── */

function InputsSection() {
  const [invalid, setInvalid] = useState(false)

  return (
    <div>
      <div style={sectionLabel}>Input &amp; Textarea</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <DemoCard>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Label htmlFor="d-name">Full name</Label>
            <Input id="d-name" placeholder="Jane Smith" />
          </div>
        </DemoCard>
        <DemoCard>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Label htmlFor="d-email">Email</Label>
              <Row>
                <span style={{ fontSize: '0.7rem', color: 'oklch(0.52 0.03 265)' }}>Toggle invalid</span>
                <Switch
                  checked={invalid}
                  onCheckedChange={setInvalid}
                  aria-label="Toggle invalid state"
                />
              </Row>
            </div>
            <Input id="d-email" type="email" placeholder="you@example.com" invalid={invalid} />
            {invalid && (
              <p style={{ fontSize: '0.75rem', color: 'oklch(0.68 0.22 22)', margin: 0 }}>
                Please enter a valid email address.
              </p>
            )}
          </div>
        </DemoCard>
        <DemoCard>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Label htmlFor="d-msg">Message</Label>
            <Textarea id="d-msg" placeholder="Write something thoughtful…" rows={3} />
          </div>
        </DemoCard>
      </div>
    </div>
  )
}

/* ── Toggles section ─────────────────────────────── */

function TogglesSection() {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(false)
  const [notifs, setNotifs] = useState(true)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  return (
    <div>
      <div style={sectionLabel}>Checkbox &amp; Switch</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <DemoCard>
          <p style={{ fontSize: '0.75rem', color: 'oklch(0.52 0.03 265)', marginBottom: '0.875rem' }}>Checkbox</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Row>
              <Checkbox
                id="ck-agree"
                checked={checked}
                onCheckedChange={v => setChecked(v as boolean | 'indeterminate')}
              />
              <Label htmlFor="ck-agree" style={{ cursor: 'pointer' }}>I agree to the terms</Label>
            </Row>
            <Row>
              <Checkbox id="ck-news" defaultChecked />
              <Label htmlFor="ck-news" style={{ cursor: 'pointer' }}>Subscribe to newsletter</Label>
            </Row>
            <Row>
              <Button size="sm" variant="ghost" onClick={() => setChecked('indeterminate')} style={{ padding: '0.25rem 0.5rem', fontSize: '0.7rem' }}>
                Set indeterminate
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setChecked(false)} style={{ padding: '0.25rem 0.5rem', fontSize: '0.7rem' }}>
                Reset
              </Button>
            </Row>
          </div>
        </DemoCard>
        <DemoCard>
          <p style={{ fontSize: '0.75rem', color: 'oklch(0.52 0.03 265)', marginBottom: '0.875rem' }}>Switch</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {[
              { id: 'sw-notif', label: 'Push notifications', checked: notifs, onChange: setNotifs },
              { id: 'sw-analytics', label: 'Analytics', checked: analytics, onChange: setAnalytics },
              { id: 'sw-mkt', label: 'Marketing emails', checked: marketing, onChange: setMarketing },
            ].map(({ id, label, checked: c, onChange }) => (
              <div key={id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Label htmlFor={id} style={{ cursor: 'pointer' }}>{label}</Label>
                <Switch id={id} checked={c} onCheckedChange={onChange} />
              </div>
            ))}
          </div>
        </DemoCard>
      </div>
    </div>
  )
}

/* ── Dialog section ──────────────────────────────── */

function DialogSection() {
  return (
    <div>
      <div style={sectionLabel}>Dialog</div>
      <DemoCard style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
        <p style={{ fontSize: '0.875rem', color: 'oklch(0.52 0.03 265)', lineHeight: 1.6, margin: 0 }}>
          Modal dialog with a blurred overlay, animated entry &amp; exit via Framer Motion,
          and focus trap. Press <kbd style={{ background: 'oklch(1 0 0 / 8%)', border: '1px solid oklch(1 0 0 / 15%)', borderRadius: '0.25rem', padding: '0.1rem 0.4rem', fontSize: '0.7rem' }}>Esc</kbd> to close.
        </p>
        <Row wrap>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Confirm deletion</DialogTitle>
              <DialogDescription>
                This will permanently delete your workspace and all of its data.
                This action cannot be undone.
              </DialogDescription>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.625rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid oklch(1 0 0 / 9%)' }}>
                <DialogClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="destructive">Delete workspace</Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Sign in</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Sign in</DialogTitle>
              <DialogDescription>Enter your credentials to continue.</DialogDescription>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginTop: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <Label htmlFor="dlg-email">Email</Label>
                  <Input id="dlg-email" type="email" placeholder="you@example.com" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <Label htmlFor="dlg-pass">Password</Label>
                  <Input id="dlg-pass" type="password" placeholder="••••••••" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.625rem', paddingTop: '0.5rem' }}>
                  <DialogClose asChild><Button variant="ghost">Cancel</Button></DialogClose>
                  <DialogClose asChild><Button>Sign in</Button></DialogClose>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </Row>
      </DemoCard>
    </div>
  )
}

/* ── Tooltip section ─────────────────────────────── */

function TooltipSection() {
  return (
    <div>
      <div style={sectionLabel}>Tooltip</div>
      <DemoCard>
        <p style={{ fontSize: '0.75rem', color: 'oklch(0.52 0.03 265)', marginBottom: '1rem' }}>Hover or focus any button</p>
        <Row wrap>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="default">Default</Button>
            </TooltipTrigger>
            <TooltipContent>Primary action tooltip</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Outline</Button>
            </TooltipTrigger>
            <TooltipContent>Secondary tooltip with longer text to show wrapping</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">Ghost</Button>
            </TooltipTrigger>
            <TooltipContent>Ghost button tooltip</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="destructive">Danger</Button>
            </TooltipTrigger>
            <TooltipContent>This action is irreversible</TooltipContent>
          </Tooltip>
          <Tooltip open>
            <TooltipTrigger asChild>
              <Button variant="secondary" disabled>Always visible</Button>
            </TooltipTrigger>
            <TooltipContent>Controlled — always open</TooltipContent>
          </Tooltip>
        </Row>
      </DemoCard>
    </div>
  )
}

/* ── Accordion section ───────────────────────────── */

function AccordionSection() {
  const items = [
    {
      v: 'a',
      q: 'What makes Lumina UI different?',
      a: 'Lumina UI wraps Radix UI primitives — every component is accessible by default with focus management, ARIA attributes, and keyboard navigation built in. You bring the style.',
    },
    {
      v: 'b',
      q: 'How does the animation work?',
      a: 'Framer Motion drives every entrance, exit, and press animation. All animations gate on prefers-reduced-motion, so users who opt out of motion get instant transitions instead.',
    },
    {
      v: 'c',
      q: 'Can I use it with any CSS framework?',
      a: 'Yes. Components are unstyled at the logic level. The default styles use CSS custom properties (tokens), so overriding them is a single variable away — no specificity wars.',
    },
    {
      v: 'd',
      q: 'What does the CLI do?',
      a: 'Run npx lumina-ui add button to copy the component\'s TypeScript source directly into your project. You own the code — edit it however you like, no abstraction in the way.',
    },
  ]

  return (
    <div>
      <div style={sectionLabel}>Accordion</div>
      <DemoCard style={{ padding: 0, overflow: 'hidden' }}>
        <Accordion type="single" collapsible>
          {items.map(({ v, q, a }) => (
            <AccordionItem key={v} value={v}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DemoCard>
    </div>
  )
}

/* ── Badge section ───────────────────────────────── */

function BadgeSection() {
  return (
    <div>
      <div style={sectionLabel}>Badge</div>
      <DemoCard>
        <Row wrap>
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </Row>
        <Separator style={{ margin: '1.25rem 0' }} />
        <Row wrap>
          <Badge variant="success">● Live</Badge>
          <Badge variant="warning">⚠ Review needed</Badge>
          <Badge variant="destructive">Critical</Badge>
          <Badge variant="outline">v2.1.0</Badge>
          <Badge variant="default">New</Badge>
          <Badge variant="secondary">Beta</Badge>
        </Row>
      </DemoCard>
    </div>
  )
}

/* ── Card section ────────────────────────────────── */

function CardSection() {
  return (
    <div>
      <div style={sectionLabel}>Card</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1rem' }}>
        <Card>
          <CardHeader>
            <CardTitle>Starter plan</CardTitle>
            <CardDescription>Perfect for side projects and freelancers.</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.04em' }}>
              $0<span style={{ fontSize: '1rem', fontWeight: 500, color: 'oklch(0.52 0.03 265)' }}>/mo</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem', fontSize: '0.8rem', color: 'oklch(0.52 0.03 265)' }}>
              {['3 projects', '5 GB storage', 'Community support'].map(f => (
                <div key={f} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'oklch(0.63 0.22 265)', flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  {f}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" style={{ width: '100%' }}>Get started</Button>
          </CardFooter>
        </Card>

        <Card style={{ borderColor: 'oklch(0.63 0.22 265 / 40%)', boxShadow: '0 0 0 1px oklch(0.63 0.22 265 / 20%), var(--lumina-shadow-lg)' }}>
          <CardHeader>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <CardTitle>Pro plan</CardTitle>
              <Badge variant="default">Popular</Badge>
            </div>
            <CardDescription>For teams shipping production apps.</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.04em' }}>
              $19<span style={{ fontSize: '1rem', fontWeight: 500, color: 'oklch(0.52 0.03 265)' }}>/mo</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem', fontSize: '0.8rem', color: 'oklch(0.52 0.03 265)' }}>
              {['Unlimited projects', '100 GB storage', 'Priority support', 'Analytics'].map(f => (
                <div key={f} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'oklch(0.63 0.22 265)', flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  {f}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button style={{ width: '100%' }}>Upgrade now</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
              <Avatar size="md">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle style={{ fontSize: '1rem' }}>Jane Doe</CardTitle>
                <CardDescription style={{ fontSize: '0.75rem' }}>Product Designer</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent style={{ paddingTop: 0 }}>
            <p style={{ fontSize: '0.85rem', color: 'oklch(0.52 0.03 265)', lineHeight: 1.6, margin: 0 }}>
              "Lumina UI gave us accessible components out of the box. The animations are smooth and the API is intuitive."
            </p>
          </CardContent>
          <CardFooter style={{ paddingTop: 0 }}>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="oklch(0.75 0.18 70)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

/* ── Avatar section ───────────────────────────────── */

function AvatarSection() {
  const initials = ['AB', 'CD', 'EF', 'GH', 'IJ']
  return (
    <div>
      <div style={sectionLabel}>Avatar</div>
      <DemoCard>
        <p style={{ fontSize: '0.75rem', color: 'oklch(0.52 0.03 265)', marginBottom: '1rem' }}>Sizes</p>
        <Row>
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size, i) => (
            <Avatar key={size} size={size}>
              <AvatarFallback>{initials[i]}</AvatarFallback>
            </Avatar>
          ))}
        </Row>
        <Separator style={{ margin: '1.25rem 0' }} />
        <p style={{ fontSize: '0.75rem', color: 'oklch(0.52 0.03 265)', marginBottom: '1rem' }}>Avatar group</p>
        <div style={{ display: 'flex' }}>
          {['AM', 'BK', 'CL', 'DM', '+4'].map((init, i) => (
            <div key={init} style={{ marginLeft: i === 0 ? 0 : '-0.625rem', zIndex: 5 - i }}>
              <Avatar size="md">
                <AvatarFallback style={{ fontSize: '0.65rem' }}>{init}</AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>
      </DemoCard>
    </div>
  )
}

/* ── Progress section ─────────────────────────────── */

function ProgressSection() {
  const [val, setVal] = useState(65)

  return (
    <div>
      <div style={sectionLabel}>Progress</div>
      <DemoCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {([
            { variant: 'default' as const, label: 'Upload progress', value: val },
            { variant: 'success' as const, label: 'Tests passing', value: 88 },
            { variant: 'warning' as const, label: 'Storage used', value: 73 },
            { variant: 'destructive' as const, label: 'Error rate', value: 12 },
          ]).map(({ variant, label, value }) => (
            <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'oklch(0.52 0.03 265)' }}>
                <span>{label}</span>
                <span>{value}%</span>
              </div>
              <Progress variant={variant} value={value} />
            </div>
          ))}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Button size="sm" variant="outline" onClick={() => setVal(v => Math.max(0, v - 15))}>−</Button>
            <span style={{ fontSize: '0.75rem', color: 'oklch(0.52 0.03 265)', minWidth: '3rem', textAlign: 'center' }}>{val}%</span>
            <Button size="sm" variant="outline" onClick={() => setVal(v => Math.min(100, v + 15))}>+</Button>
          </div>
        </div>
      </DemoCard>
    </div>
  )
}

/* ── Tabs section ─────────────────────────────────── */

function TabsSection() {
  return (
    <div>
      <div style={sectionLabel}>Tabs</div>
      <DemoCard>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="billing" disabled>Billing</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', paddingTop: '0.25rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'oklch(0.52 0.03 265)', lineHeight: 1.6, margin: 0 }}>
                Your workspace is healthy. 3 active projects, 2 pending deployments.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                {[['24', 'Deploys'], ['99.9%', 'Uptime'], ['12ms', 'P99']] .map(([v, l]) => (
                  <div key={l} style={{ background: 'oklch(1 0 0 / 5%)', border: '1px solid oklch(1 0 0 / 8%)', borderRadius: '0.5rem', padding: '0.75rem' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.03em' }}>{v}</div>
                    <div style={{ fontSize: '0.7rem', color: 'oklch(0.52 0.03 265)', marginTop: '0.125rem' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="analytics">
            <div style={{ paddingTop: '0.25rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'oklch(0.52 0.03 265)', lineHeight: 1.6, margin: '0 0 1rem' }}>
                Traffic overview for the last 30 days.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[['Page views', 82], ['Unique visitors', 58], ['Bounce rate', 34], ['Avg. session', 71]].map(([l, v]) => (
                  <div key={String(l)} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'oklch(0.52 0.03 265)', width: '7rem', flexShrink: 0 }}>{l}</span>
                    <Progress value={Number(v)} style={{ flex: 1 }} />
                    <span style={{ fontSize: '0.7rem', color: 'oklch(0.63 0.22 265)', width: '2rem', textAlign: 'right' }}>{v}%</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '0.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <Label>Public profile</Label>
                  <p style={{ fontSize: '0.75rem', color: 'oklch(0.52 0.03 265)', margin: '0.125rem 0 0' }}>Make your profile visible to everyone</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <Label>Email notifications</Label>
                  <p style={{ fontSize: '0.75rem', color: 'oklch(0.52 0.03 265)', margin: '0.125rem 0 0' }}>Receive deploy and alert emails</p>
                </div>
                <Switch />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DemoCard>
    </div>
  )
}

/* ── Select section ───────────────────────────────── */

function SelectSection() {
  const [framework, setFramework] = useState('')
  const [timezone, setTimezone] = useState('')

  return (
    <div>
      <div style={sectionLabel}>Select</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1rem' }}>
        <DemoCard>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Label htmlFor="sel-fw">Framework</Label>
            <Select value={framework} onValueChange={setFramework}>
              <SelectTrigger id="sel-fw">
                <SelectValue placeholder="Select a framework…" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>React</SelectLabel>
                  <SelectItem value="nextjs">Next.js</SelectItem>
                  <SelectItem value="remix">Remix</SelectItem>
                  <SelectItem value="vite">Vite</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Other</SelectLabel>
                  <SelectItem value="svelte">SvelteKit</SelectItem>
                  <SelectItem value="nuxt">Nuxt</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {framework && <p style={{ fontSize: '0.75rem', color: 'oklch(0.63 0.22 265)', margin: 0 }}>Selected: {framework}</p>}
          </div>
        </DemoCard>
        <DemoCard>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Label htmlFor="sel-tz">Timezone</Label>
            <Select value={timezone} onValueChange={setTimezone}>
              <SelectTrigger id="sel-tz">
                <SelectValue placeholder="Pick a timezone…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                <SelectItem value="est">Eastern (GMT-5)</SelectItem>
                <SelectItem value="pst">Pacific (GMT-8)</SelectItem>
                <SelectItem value="cet">Central Europe (GMT+1)</SelectItem>
                <SelectItem value="jst">Japan (GMT+9)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DemoCard>
      </div>
    </div>
  )
}

/* ── Page ────────────────────────────────────────── */

export default function DemoPage() {
  return (
    <TooltipProvider delayDuration={200}>
      <Head>
        <title>Lumina UI — Component Demo</title>
        <meta name="description" content="Interactive demo of every Lumina UI component" />
      </Head>

      {/* Aurora background keyframes */}
      <style>{`
        @keyframes lumina-aurora-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-3%, 4%) scale(1.05); }
        }
        @keyframes lumina-aurora-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(4%, -3%) scale(0.95); }
        }
        @keyframes lumina-aurora-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(2%, 2%) scale(1.08); }
          66% { transform: translate(-2%, -1%) scale(0.97); }
        }
        @keyframes lumina-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lumina-demo-hero-title {
          animation: lumina-fade-up 0.7s cubic-bezier(0,0,0.2,1) both;
        }
        .lumina-demo-hero-sub {
          animation: lumina-fade-up 0.7s 0.1s cubic-bezier(0,0,0.2,1) both;
        }
        .lumina-demo-hero-cta {
          animation: lumina-fade-up 0.7s 0.2s cubic-bezier(0,0,0.2,1) both;
        }
        .lumina-demo-badge {
          animation: lumina-fade-up 0.7s cubic-bezier(0,0,0.2,1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .lumina-demo-hero-title,
          .lumina-demo-hero-sub,
          .lumina-demo-hero-cta,
          .lumina-demo-badge {
            animation: none;
          }
        }
      `}</style>

      <div
        className="lumina-dark"
        style={{
          minHeight: '100vh',
          background: 'oklch(0.076 0.02 265)',
          color: 'oklch(0.96 0.005 265)',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        {/* Aurora blobs */}
        <div aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: '-20%', left: '-10%',
            width: '70vw', height: '70vw',
            background: 'radial-gradient(circle, oklch(0.55 0.24 265 / 18%) 0%, transparent 65%)',
            animation: 'lumina-aurora-1 18s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', bottom: '-15%', right: '-15%',
            width: '60vw', height: '60vw',
            background: 'radial-gradient(circle, oklch(0.60 0.20 295 / 14%) 0%, transparent 65%)',
            animation: 'lumina-aurora-2 22s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', top: '35%', left: '30%',
            width: '50vw', height: '50vw',
            background: 'radial-gradient(circle, oklch(0.58 0.18 235 / 10%) 0%, transparent 65%)',
            animation: 'lumina-aurora-3 28s ease-in-out infinite',
          }} />
        </div>

        {/* Nav */}
        <nav style={{
          position: 'sticky', top: 0, zIndex: 50,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 2rem', height: '3.5rem',
          background: 'oklch(0.076 0.02 265 / 80%)',
          borderBottom: '1px solid oklch(1 0 0 / 7%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '1.75rem', height: '1.75rem',
              background: 'linear-gradient(135deg, oklch(0.63 0.22 265), oklch(0.62 0.20 292))',
              borderRadius: '0.5rem', fontSize: '0.75rem',
            }}>✦</span>
            <span style={{ fontWeight: 700, letterSpacing: '-0.03em', fontSize: '1rem' }}>Lumina UI</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Link href="/" passHref legacyBehavior>
              <Button variant="ghost" size="sm" asChild>
                <a style={{ color: 'oklch(0.52 0.03 265)' }}>Docs</a>
              </Button>
            </Link>
            <Link href="/docs/getting-started" passHref legacyBehavior>
              <Button size="sm" asChild>
                <a>Get started →</a>
              </Button>
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <header style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '7rem 1.5rem 5rem', maxWidth: '780px', margin: '0 auto' }}>
          <div className="lumina-demo-badge" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'oklch(0.63 0.22 265 / 10%)',
            border: '1px solid oklch(0.63 0.22 265 / 30%)',
            borderRadius: '9999px',
            padding: '0.375rem 1rem',
            fontSize: '0.75rem', fontWeight: 600,
            color: 'oklch(0.80 0.15 265)',
            letterSpacing: '0.05em', textTransform: 'uppercase',
            marginBottom: '2rem',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'oklch(0.63 0.22 265)', boxShadow: '0 0 8px oklch(0.63 0.22 265)', flexShrink: 0 }} />
            Headless · Accessible · Animated
          </div>

          <h1 className="lumina-demo-hero-title" style={{
            fontSize: 'clamp(2.8rem, 7vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '-0.05em',
            lineHeight: 1.05,
            margin: '0 0 1.5rem',
          }}>
            Components that{' '}
            <span style={{
              background: 'linear-gradient(135deg, oklch(0.80 0.16 265) 0%, oklch(0.78 0.14 300) 50%, oklch(0.82 0.12 220) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              feel alive
            </span>
          </h1>

          <p className="lumina-demo-hero-sub" style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'oklch(0.52 0.03 265)',
            lineHeight: 1.65,
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
          }}>
            Every component below is interactive. Radix UI handles accessibility,
            Framer Motion handles animation, CSS custom properties handle theming.
          </p>

          <div className="lumina-demo-hero-cta" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/docs/getting-started" passHref legacyBehavior>
              <Button size="lg" asChild>
                <a>Start building</a>
              </Button>
            </Link>
            <Link href="/docs/button" passHref legacyBehavior>
              <Button size="lg" variant="outline" asChild>
                <a>View all components</a>
              </Button>
            </Link>
          </div>

          {/* Stat row */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '2.5rem', marginTop: '4rem',
            flexWrap: 'wrap',
          }}>
            {[['8', 'Components'], ['100%', 'Accessible'], ['0', 'Forced styles']].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.04em', background: 'linear-gradient(135deg, oklch(0.80 0.16 265), oklch(0.82 0.12 220))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{n}</div>
                <div style={{ fontSize: '0.75rem', color: 'oklch(0.52 0.03 265)', marginTop: '0.125rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500 }}>{l}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Showcase */}
        <main style={{ position: 'relative', zIndex: 1, maxWidth: '960px', margin: '0 auto', padding: '0 1.5rem 8rem' }}>

          {/* Divider with label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'oklch(1 0 0 / 6%)' }} />
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(0.40 0.02 265)' }}>Components</span>
            <div style={{ flex: 1, height: '1px', background: 'oklch(1 0 0 / 6%)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <ButtonsSection />

            {/* 2-col grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 440px), 1fr))', gap: '2rem' }}>
              <InputsSection />
              <TogglesSection />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 440px), 1fr))', gap: '2rem' }}>
              <DialogSection />
              <TooltipSection />
            </div>

            <AccordionSection />

            <BadgeSection />

            <CardSection />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 440px), 1fr))', gap: '2rem' }}>
              <AvatarSection />
              <ProgressSection />
            </div>

            <TabsSection />

            <SelectSection />
          </div>
        </main>

        {/* Footer */}
        <footer style={{
          position: 'relative', zIndex: 1,
          textAlign: 'center', padding: '2rem',
          borderTop: '1px solid oklch(1 0 0 / 7%)',
          fontSize: '0.8rem',
          color: 'oklch(0.38 0.02 265)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
        }}>
          <span style={{ fontWeight: 700, color: 'oklch(0.52 0.03 265)' }}>Lumina UI</span>
          <span>·</span>
          <span style={{ fontWeight: 700, color: 'oklch(0.52 0.03 265)' }}>Created by Devnest.net</span>
          <span>·</span>
          <span>MIT {new Date().getFullYear()}</span>
          <span>·</span>
          <Link href="/docs/getting-started" style={{ color: 'oklch(0.63 0.22 265)', textDecoration: 'none', fontWeight: 500 }}>Documentation</Link>
        </footer>
      </div>
    </TooltipProvider>
  )
}
