const S = window.SzumTechDesignSystem_1f5ec4;
const {
  Button, Card, CardHeader, CardTitle, CardDescription, CardContent,
  Badge, Status, Input, Select, Switch, Checkbox, Label, Field, FieldDescription,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Separator, Avatar, AvatarFallback,
} = S;
const Ic = window.Icons;

const WIDGETS = [
  { id: 1, name: "Free Shipping Bar", type: "Announcement bar", icon: "Truck", status: "success", statusLabel: "Live", impressions: "48.2k", enabled: true },
  { id: 2, name: "Gift With Purchase", type: "Cart upsell", icon: "Gift", status: "success", statusLabel: "Live", impressions: "31.7k", enabled: true },
  { id: 3, name: "Product Reviews", type: "Product page", icon: "Star", status: "warning", statusLabel: "Low traffic", impressions: "12.0k", enabled: true },
  { id: 4, name: "Countdown Timer", type: "Announcement bar", icon: "Timer", status: "default", statusLabel: "Draft", impressions: "—", enabled: false },
];

function Stat({ label, value, delta, positive }) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle><span className="stat-val">{value}</span></CardTitle>
      </CardHeader>
      <CardContent>
        <span className="stat-delta" style={{ color: positive ? "var(--success)" : "var(--muted-foreground)" }}>{delta}</span>
      </CardContent>
    </Card>
  );
}

function Editor({ widget, open, onClose, onSave }) {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("bar");
  const [enabled, setEnabled] = React.useState(true);
  React.useEffect(() => {
    if (widget) { setName(widget.name); setEnabled(widget.enabled); }
    else { setName(""); setEnabled(true); }
  }, [widget, open]);

  return (
    <React.Fragment>
      <div className="scrim" data-open={open} onClick={onClose} />
      <aside className="panel" data-open={open} aria-hidden={!open}>
        <div className="panel-head">
          <div>
            <div style={{ fontSize: 17, fontWeight: 700 }}>{widget ? "Edit widget" : "New widget"}</div>
            <div style={{ fontSize: 13, color: "var(--muted-foreground)" }}>Configure how it appears on your storefront.</div>
          </div>
          <button className="x" onClick={onClose} aria-label="Close"><Ic.X /></button>
        </div>
        <div className="panel-body">
          <Field>
            <Label htmlFor="wn">Widget name</Label>
            <Input id="wn" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Free Shipping Bar" />
          </Field>
          <Field>
            <Label htmlFor="wt">Placement</Label>
            <Select id="wt" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="bar">Announcement bar</option>
              <option value="cart">Cart upsell</option>
              <option value="product">Product page</option>
              <option value="popup">Popup</option>
            </Select>
            <FieldDescription>Where this theme app extension renders.</FieldDescription>
          </Field>
          <Field>
            <Label htmlFor="msg">Message</Label>
            <Input id="msg" defaultValue="Free shipping on orders over $75" />
          </Field>
          <Separator />
          <div className="toggle-row">
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Show on storefront</div>
              <div style={{ fontSize: 12, color: "var(--muted-foreground)" }}>Publish immediately after saving.</div>
            </div>
            <Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
          </div>
          <label className="toggle-row" style={{ cursor: "pointer" }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Mobile only</div>
              <div style={{ fontSize: 12, color: "var(--muted-foreground)" }}>Restrict to small viewports.</div>
            </div>
            <Checkbox />
          </label>
        </div>
        <div className="panel-foot">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button onClick={() => onSave({ name, enabled })}>{widget ? "Save changes" : "Create widget"}</Button>
        </div>
      </aside>
    </React.Fragment>
  );
}

function App() {
  const [widgets, setWidgets] = React.useState(WIDGETS);
  const [nav, setNav] = React.useState("Dashboard");
  const [editing, setEditing] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const toggle = (id) => setWidgets((ws) => ws.map((w) => w.id === id
    ? { ...w, enabled: !w.enabled, status: !w.enabled ? "success" : "default", statusLabel: !w.enabled ? "Live" : "Draft" }
    : w));

  const openNew = () => { setEditing(null); setOpen(true); };
  const openEdit = (w) => { setEditing(w); setOpen(true); };
  const save = (data) => {
    if (editing) setWidgets((ws) => ws.map((w) => w.id === editing.id ? { ...w, name: data.name, enabled: data.enabled } : w));
    else setWidgets((ws) => [...ws, { id: Date.now(), name: data.name || "Untitled widget", type: "Announcement bar", icon: "Layers", status: data.enabled ? "success" : "default", statusLabel: data.enabled ? "Live" : "Draft", impressions: "0", enabled: data.enabled }]);
    setOpen(false);
  };

  const filtered = widgets.filter((w) => w.name.toLowerCase().includes(query.toLowerCase()));
  const NavItem = ({ id, icon: Icon, label }) => (
    <button className="nav-item" data-active={nav === id} onClick={() => setNav(id)}>
      <Icon /> {label}
    </button>
  );

  return (
    <div className="app">
      <nav className="side">
        <div className="brand">
          <div className="brand-mark">W</div>
          <div className="brand-name">Widget Studio</div>
        </div>
        <div className="nav">
          <NavItem id="Dashboard" icon={Ic.Grid} label="Dashboard" />
          <NavItem id="Widgets" icon={Ic.Layers} label="Widgets" />
          <NavItem id="Analytics" icon={Ic.Chart} label="Analytics" />
          <NavItem id="Settings" icon={Ic.Settings} label="Settings" />
        </div>
        <div className="side-foot">
          <div className="store">
            <Avatar><AvatarFallback>BM</AvatarFallback></Avatar>
            <div>
              <div className="store-name">Bass Mafia</div>
              <div className="store-plan">Shopify · Advanced</div>
            </div>
          </div>
        </div>
      </nav>

      <div className="main">
        <header className="topbar">
          <h1>{nav}</h1>
          <div className="search">
            <Ic.Search />
            <Input placeholder="Search widgets…" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <Button startIcon={<Ic.Plus />} onClick={openNew}>New widget</Button>
        </header>

        <div className="content">
          <div className="stats">
            <Stat label="Active widgets" value={String(widgets.filter((w) => w.enabled).length)} delta="↑ 1 this week" positive />
            <Stat label="Impressions (30d)" value="92.1k" delta="↑ 12.4% vs prev" positive />
            <Stat label="Assisted revenue" value="$8,240" delta="↑ 6.1% vs prev" positive />
          </div>

          <div className="section-head">
            <h2>Your widgets</h2>
            <Button variant="outline" size="sm">Manage theme</Button>
          </div>

          <Card>
            <CardContent style={{ padding: 0 }}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Widget</TableHead>
                    <TableHead>Placement</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="right">Impressions</TableHead>
                    <TableHead className="right">Enabled</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((w) => {
                    const WIcon = Ic[w.icon] || Ic.Layers;
                    return (
                      <TableRow key={w.id}>
                        <TableCell>
                          <div className="cellrow">
                            <Avatar style={{ background: "var(--secondary)" }}><AvatarFallback style={{ background: "transparent", color: "var(--secondary-foreground)" }}><WIcon width={16} height={16} /></AvatarFallback></Avatar>
                            <span className="wname">{w.name}</span>
                          </div>
                        </TableCell>
                        <TableCell><span className="wtype">{w.type}</span></TableCell>
                        <TableCell><Status variant={w.status}>{w.statusLabel}</Status></TableCell>
                        <TableCell className="right">{w.impressions}</TableCell>
                        <TableCell className="right"><Switch checked={w.enabled} onChange={() => toggle(w.id)} /></TableCell>
                        <TableCell className="right"><Button variant="ghost" size="sm" onClick={() => openEdit(w)}>Edit</Button></TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      <Editor widget={editing} open={open} onClose={() => setOpen(false)} onSave={save} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
