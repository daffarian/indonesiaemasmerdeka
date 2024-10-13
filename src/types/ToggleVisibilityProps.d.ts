export interface ToggleVisibilityProps {
  setVisibility: (value: number) => Promise<void>;
  fetchVisibility: () => Promise<{ value: number }[]>;
}
