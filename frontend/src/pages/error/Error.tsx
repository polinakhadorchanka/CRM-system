import React, {FC} from 'react';

interface ErrorProps {
  code: number | null;
  value: string;
}

const Error: FC<ErrorProps> = ({code = null, value}) => {
  return (
    <div className={'absolute w-full h-full flex justify-center items-center'}>
      <h1 className={'text-2xl font-medium text-gray-500 uppercase'}>{code} {value}</h1>
    </div>
  );
};

export default Error;