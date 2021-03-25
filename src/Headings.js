const Headings = ({ company, isNew, isFeatured }) => {
  let status,
    featured = "";
  if (isNew) {
    status = "NEW";
  }
  if (isFeatured) {
    featured = "FEATURED";
  }
  return (
    <div class="headings">
      <span class="company">{company}</span>
      <span class={status}>{`${status}!`}</span>
      <span class={featured}>{featured}</span>
    </div>
  );
};
export default Headings;
