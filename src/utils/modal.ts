/*
 * Arquivo com functions para manipulação dos modais do Bootstrap 5.
 */
declare const bootstrap: any;
export interface IModal {
  toggle(): void;
  show(): void;
  hide(): void;
}

export function getModal(modal_id: string): IModal {
  const myModalEl = document.getElementById(modal_id);
  return bootstrap.Modal.getInstance(myModalEl) as IModal;
}
