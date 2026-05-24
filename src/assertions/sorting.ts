export function expectSortedAscending(values: string[]): void {
  const sortedValues = [...values].sort((a, b) => a.localeCompare(b));

  if (values.join("|") !== sortedValues.join("|")) {
    throw new Error(`Expected values to be sorted ascending. Received: ${values.join(", ")}`);
  }
}
