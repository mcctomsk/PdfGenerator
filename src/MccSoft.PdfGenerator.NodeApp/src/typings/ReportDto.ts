//     This code was generated by a Reinforced.Typings tool. 
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

export interface IReportDto
{
    properties?: IReportProperties;
    reportDateRange?: IDateRange;
}
export interface IReportProperties
{
    language?: string;
    createdAt: string;
}
export interface IDateRange
{
    startDate: string;
    endDate: string;
    periodLengthInDays: number;
}
