import React from 'react';

/**
 * Table.
 */
export default class Table extends React.Component
{
    /**
     * Create all rows.
     */
    createRows()
    {
        return this.props.data[this.props.data_property].map((row, index) => this.createRow(row, index));
    }

    /**
     * Return a row for the provided data.
     */
    createRow(data, index)
    {
        return (
            <tr key={index}>
                <td className="column-issuer">{data.securityName ? data.securityName : "NA"}</td>
                <td>{data.description ? data.description : "NA"}</td>
                <td>{data.currency ? data.currency : "NA"}</td>
                <td className="align-center">{data.yearsRemaining ? data.yearsRemaining : "NA"}</td>
                <td>{data.benchmarkSecurityDescription ? data.benchmarkSecurityDescription : "NA"}</td>
                <td className="align-center">{data.bidSpreadVsBenchmark ? data.bidSpreadVsBenchmark : "NA"}</td>
                <td className="align-center">{data.bidSpreadVsGocCurve ? data.bidSpreadVsGocCurve : "NA"}</td>
                <td className="align-center">{data.bidSpreadVs3mCdor ? data.bidSpreadVs3mCdor : "NA"}</td>
                <td className="align-center">{data.bidSpreadVs3mUsdl ? data.bidSpreadVs3mUsdl : "NA"}</td>
                <td>{data.readableTimestamp ? data.readableTimestamp : "NA"}</td>
                <td><i className="fa fa-bar-chart" aria-hidden="true"></i></td>
            </tr>
        );
    }

    /**
     * Render.
     */
    render()
    {
        return (
            <table className="table table-striped">
                <caption>{this.props.title}</caption>
                <thead>
                    <tr>
                        <th colSpan="5" className="no-border"></th>
                        <th colSpan="4" className="super-column">Spread vs.</th>
                        <th className="no-border"></th>
                    </tr>
                    <tr>
                        <th>Issuer</th>
                        <th>Issue Description</th>
                        <th>Currency</th>
                        <th>Years Remaining</th>
                        <th>Benchmark</th>
                        <th>Benchmark</th>
                        <th>GoC Curve</th>
                        <th>3M CDOR</th>
                        <th>3M USDL</th>
                        <th>Updated</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.createRows()}
                </tbody>
            </table>
        );
    }
}