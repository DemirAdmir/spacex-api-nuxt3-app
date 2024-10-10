import type { Launch } from "../interfaces/Launch";

export interface ListViewProps {
  launches: Launch[];
  actionLabel: string;
  buttonType?: string;
}
