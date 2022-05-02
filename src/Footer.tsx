import * as React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: React.VFC = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <a href="/" className="footer__privacy">
          プライバシーポリシー
        </a>
        <a href="/" className="footer__contact">
          お問い合わせ
        </a>
        <a href="/" className="footer__twitter">
          <TwitterIcon />
        </a>
      </div>
      <div className="footer__copyright">
        &copy;YagiWorks 2022 All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
