import { CSSProperties, FC } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

interface IProps {
  color?: string;
}

const override: CSSProperties = {
  display: 'block',
  margin: '200px auto'
};

const Preloader: FC<IProps> = ({ color }) => {
  return (
    <>
      <FadeLoader
        loading
        color={color}
        cssOverride={override}
        height={25}
        margin={20}
        width={8}
        radius={1}
        speedMultiplier={1}
      />
    </>
  );
};

export default Preloader;
