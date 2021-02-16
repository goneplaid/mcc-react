const AvatarList = ({ heading, children }) => {
  return (
    <div>
      <h3 className="mb-1/2 font-normal text-xs text-grey-dark">
        {heading}
      </h3>
      <section className="flex flex-row">
        {children}
      </section>
    </div>
  );
}

export default AvatarList;
