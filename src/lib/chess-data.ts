export interface CompactDataset {
    schema_version: number;
    format: string;
    grain: string;
    columns: string[];
    rows: Array<Array<string | number>>;
}

export async function loadCompactRows<T extends Record<string, string | number>>(
    url: string,
    expectedColumns: string[],
): Promise<T[]> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Data request failed with status ${response.status}.`);
    }

    const dataset = (await response.json()) as CompactDataset;

    if (
        dataset.schema_version !== 1 ||
        dataset.format !== "row-array" ||
        !Array.isArray(dataset.columns) ||
        !Array.isArray(dataset.rows)
    ) {
        throw new Error("The dashboard data does not match the expected schema.");
    }

    const missingColumns = expectedColumns.filter(
        (column) => !dataset.columns.includes(column),
    );

    if (missingColumns.length > 0) {
        throw new Error(`Dashboard data is missing: ${missingColumns.join(", ")}.`);
    }

    return dataset.rows.map((row) =>
        Object.fromEntries(
            dataset.columns.map((column, index) => [column, row[index]]),
        ),
    ) as T[];
}

export const integerFormatter = new Intl.NumberFormat("en-US");

export function formatInteger(value: number) {
    return integerFormatter.format(value);
}

export function formatPercent(numerator: number, denominator: number) {
    if (denominator === 0) return "—";
    return `${((numerator / denominator) * 100).toFixed(2)}%`;
}

export function titleCase(value: string) {
    return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}
