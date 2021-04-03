import { Logo, Headings, JobTitle, Miscellaneous, Skills } from "./Entities";

const JobListing = ({ listing }) => {
  let featured = "";
  if (listing.featured) {
    featured = "featured-job-listing";
  }
  return (
    <div id={listing.id} className={`job-listing ${featured}`}>
      <div>
        <Logo link={listing.logo} />
        <div className="general-info">
          <Headings
            company={listing.company}
            isNew={listing.new}
            isFeatured={listing.featured}
          />
          <JobTitle title={listing.position} />
          <Miscellaneous
            timePosted={listing.postedAt}
            typeOfContract={listing.contract}
            workLocation={listing.location}
          />
        </div>
      </div>
      <Skills
        role={listing.role}
        level={listing.level}
        languages={listing.languages}
        tools={listing.tools}
      />
    </div>
  );
};
export default JobListing;
