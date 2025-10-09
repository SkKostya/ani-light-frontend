import './grid.scss';

interface IProps {
  maxColCount?: number;
  minColSize?: number;
  gap?: number;
  children?: React.ReactNode;
}

const Grid: React.FC<IProps> = ({
  maxColCount = 3,
  minColSize = 180,
  gap = 16,
  children
}) => {
  return (
    <div
      style={{
        '--grid-max-col-count': maxColCount,
        '--grid-min-col-size': minColSize + 'px',
        '--grid-gap': gap + 'px'
      }}
      className="grid"
    >
      {children}
    </div>
  );
};

export default Grid;
