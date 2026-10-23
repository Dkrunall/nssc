export type TrackEvent = "call_click" | "whatsapp_click" | "form_submit";

/** No-op until an analytics provider is added. Wire it up here once. */
export function track(event: TrackEvent, props?: Record<string, string>) {
  void event;
  void props;
}
