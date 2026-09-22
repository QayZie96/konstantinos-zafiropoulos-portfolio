export const rocketeersSummary = {
    lifetimeItemsSold: 23_000,
    documentedEbayUnits: 21_463,
    documentedUsdSales: 219_804.57,
    separatelyRecordedEurSales: 3_189.13,
    separatelyRecordedGbpSales: 9.99,
    uniqueBuyers: 6_944,
    uniqueItemIds: 1_240,
    activeSalesDays: 1_689,
    repeatBuyerShare: 0.473,
    repeatBuyerUsdSalesShare: 0.802,
    returnCases: 95,
    returnCaseRate: 0.0045,
    disputeClaims: 50,
    disputeClaimRate: 0.0024,
    messageRecords: 42_982,
    exportEndDate: "May 2022",
} as const;

export const rocketeersLiveFeedback = {
    total: 6_455,
    positive: 6_454,
    neutral: 1,
    negative: 0,
    positiveScore: 3_361,
} as const;

export const annualEbayPerformance = [
    { year: "2017", scope: "Partial", usdSales: 1_886.86, units: 159, buyers: 77 },
    { year: "2018", scope: "Full", usdSales: 27_254.09, units: 2_600, buyers: 759 },
    { year: "2019", scope: "Full", usdSales: 33_508.78, units: 3_262, buyers: 1_133 },
    { year: "2020", scope: "Full", usdSales: 72_480.12, units: 7_687, buyers: 2_881 },
    { year: "2021", scope: "Full", usdSales: 68_908.01, units: 6_175, buyers: 2_275 },
    { year: "2022", scope: "Partial", usdSales: 15_766.71, units: 1_316, buyers: 443 },
] as const;

export const platformPerformance = [
    { platform: "PC", usdSales: 92_823.75, salesShare: 0.422, units: 8_800 },
    { platform: "PlayStation", usdSales: 64_346.19, salesShare: 0.293, units: 6_874 },
    { platform: "Xbox", usdSales: 57_614.04, salesShare: 0.262, units: 5_194 },
    { platform: "Nintendo Switch", usdSales: 3_948.29, salesShare: 0.018, units: 222 },
    { platform: "Other / unclear", usdSales: 1_072.3, salesShare: 0.005, units: 373 },
] as const;

export const rocketeersHeadlineMetrics = [
    { value: "23K+", label: "Items sold across the business" },
    { value: "$219.8K", label: "Documented eBay USD gross sales" },
    { value: "6,944", label: "Documented unique buyer IDs" },
    { value: "0", label: "Negative feedback on the final live profile" },
] as const;

export const rocketeersFeedbackMetrics = [
    { value: "6,454", label: "Positive feedback on the final live profile" },
    { value: "1", label: "Neutral feedback" },
    { value: "0", label: "Negative feedback" },
    { value: "3,361", label: "Positive feedback score" },
] as const;
