const parseSvgIcon = (iconString: string) => {
  return <span dangerouslySetInnerHTML={{ __html: iconString }} />;
};

export default parseSvgIcon;
