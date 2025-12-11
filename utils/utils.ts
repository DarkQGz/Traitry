export function checkConditions(
  value: number | string | undefined,
  rule: { min?: number; max?: number; equals?: number | string }
): boolean {
  if (value === undefined) return false;

  if (rule.min !== undefined && (value as number) < rule.min) return false;
  if (rule.max !== undefined && (value as number) > rule.max) return false;
  if (rule.equals !== undefined && value !== rule.equals) return false;

  return true;
}
