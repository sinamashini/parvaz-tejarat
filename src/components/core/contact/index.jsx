import Image from "next/image";
import Link from "next/link";

const ContactSection = ({ section }) => {
  const { description, button, socials } = section;

  return (
    <section>
      <div className="about__area-2">
        <div className="footer__top-4 bg">
          <div className="footer__top-wrapper-3">
            <div className="footer__logo-3 pt-120">
              <Image
                priority
                // style={{ width: "auto", height: "auto" }}
                src={"/assets/imgs/logo/logo_navy.png"}
                width={70}
                height={70}
                alt="Footer Logo"
              />
              <p>{description}</p>
            </div>
            <div className="footer__social-3">
              <ul>
                {socials.map((item) => (
                  <li
                    key={item.socialApp.title}
                    style={{ width: "auto", height: "auto" }}
                  >
                    <a href={item.socialApp.url}>{item.socialApp.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__contact-3 font-12px">
              <Link className="font-12px" href={new URL(button.url).pathname}>
                {button.title}
                <i class="fa-solid fa-phone"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
