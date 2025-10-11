import './main-loader.scss';

interface IProps {
  fullWidth?: boolean;
  fullScreen?: boolean;
}

const MainLoader: React.FC<IProps> = ({ fullWidth, fullScreen }) => {
  const rootClasses = [
    'main-loader',
    fullWidth ? 'main-loader--full-width' : '',
    fullScreen ? 'main-loader--fullscreen' : ''
  ].join(' ');

  return (
    <div className={rootClasses}>
      <div className={fullScreen ? 'main-loader__container' : ''}>
        <div className="main-loader__text">
          <span>AniLight</span>
        </div>
      </div>
    </div>
  );
};

export default MainLoader;
