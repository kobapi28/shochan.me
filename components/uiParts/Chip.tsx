type Props = {
  title: string;
  color: string;
};

const Chip: React.VFC<Props> = ({ title, color }) => {
  return (
    <span
      style={{
        color: '#fff',
        backgroundColor: color,
        padding: '4px 12px',
        borderRadius: '16px',
      }}
    >
      {title}
    </span>
  );
};

export default Chip;
