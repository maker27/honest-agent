import React, { useMemo } from 'react';

import './Records.scss';

interface RecordsProps {
    records: [string, string][];
}

const Records: React.FC<RecordsProps> = ({ records }) => {
    const memoRows = useMemo(
        () =>
            records.map(([element, value], i) => {
                const details =
                    element === 'Эл. почта' ? (
                        <a href={'mailto:' + value}>{value}</a>
                    ) : (
                        value
                    );
                return (
                    <div className="records__row" key={i}>
                        <dt className="records__element">{element}</dt>
                        <dd className="records__details">{details}</dd>
                    </div>
                );
            }),
        [records]
    );

    return <dl className="section__records records">{memoRows}</dl>;
};

export default Records;
