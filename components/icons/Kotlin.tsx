import IconProps from './iconPropsType';

const Kotlin: React.VFC<IconProps> = ({ width, height }) => {
  return (
    <svg
      viewBox='0 0 128 128'
      width={width}
      height={height}
      role='img'
      aria-label=''
    >
      <g fill='#7F6CB1'>
        <path d='M0 0h61.4L0 60.4zM0 128L128 0H64.6L0 63.7zM128 128L64.6 66.6 3.3 128z'></path>
      </g>
    </svg>
  );
};

export default Kotlin;
