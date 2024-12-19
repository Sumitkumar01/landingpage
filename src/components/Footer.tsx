import SectionWithContainer from "./SectionWithContainer";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <SectionWithContainer>
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Company Name. All rights reserved.</p>
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;
