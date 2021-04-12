import React from 'react';
import { Link } from 'react-router-dom';

type HeaderType = {
  label: string;
  accessor: string;
  type?: string;
};

type RowType = { [key: string]: string | number | null } | null;

interface Props {
  headers: Array<HeaderType>;

  data: Array<RowType>;
}

function Table({ headers, data }: Props) {
  const handleRow = (row: RowType) => ({ accessor, type }: HeaderType) => {
    switch (type) {
      case 'date': {
        return (
          <td key={row?.[accessor]} className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {row?.[accessor]}
            </span>
          </td>
        );
      }
      case 'detail': {
        return (
          <td
            key={row?.[accessor]}
            className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
          >
            <Link
              to={`/order-detail/${row?.[accessor]}`}
              className="text-indigo-600 hover:text-indigo-900"
            >
              Ver
            </Link>
          </td>
        );
      }
      default: {
        return (
          <td
            key={row?.[accessor]}
            className="px-6 py-4  capitalize whitespace-nowrap"
          >
            <div className="text-sm text-gray-900">{row?.[accessor]}</div>
          </td>
        );
      }
    }
  };

  return (
    <div className="w-max overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {headers.map((header) => (
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    key={header.label}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row) => (
                <tr key={row?.id}>{headers.map(handleRow(row))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
