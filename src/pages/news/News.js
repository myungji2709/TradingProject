import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./New.css";
import hinh1 from "./hinh1.webp";
import hinh2 from "./hinh2.webp";
import hinh3 from "./hinh3.webp";
import React from "react";

export default function News() {
  return (
    <div id="news">
      <Header />
      <h1 style={{textAlign:"center",paddingTop:"70px"}}>News About Sneakers</h1>
      <div className="news">
        <div className="hinh_news">
          <img src={hinh1} alt="" style={{ width: "100%" }} />
        </div>
        <div className="info_news">
          <h4 style={{ fontSize: "40px" }}>
            Official Images Of The Air Jordan 1 Retro High OG “UNC Toe”
          </h4>
          <p style={{ fontWeight: "500" }}>
            This Black, University Blue, and White colorway, otherwise known
            colloquially as “UNC Toe”, arrives clad in leather, with smooth
            black overlays and ankles pads, smooth white mid-panels, and the
            tumbled texture on the Tar Heel inspired shade of blue at the
            toe-box, ankle collar, and heel. The black nylon tongue and white
            midsole are standard practice for the Air Jordan 1, as is the solid
            rubber outsole, itself flooded in the University Blue.
          </p>
          <a
            href="https://sneakernews.com/2023/06/23/air-jordan-1-retro-high-og-unc-toe-dz5485-400/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Read Now</button>
          </a>
        </div>
      </div>
      <div className="news">
        <div className="hinh_news">
          <img src={hinh2} alt="" style={{ width: "100%" }} />
        </div>
        <div className="info_news">
          <h4 style={{ fontSize: "40px" }}>
            The Nike Calm Slide Will Release On July 14th
          </h4>
          <p style={{ fontWeight: "500" }}>
            Slip-on, laceless footwear options are almost as old as time, but
            the last two years have seen the category explode in popularity and
            diversity. To kick off 2023, the Swoosh has unveiled the Nike Calm
            slide, a new contender in the saturated space.
          </p>
          <a
            href="https://sneakernews.com/2023/01/06/nike-calm-slide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Read Now</button>
          </a>
        </div>
      </div>
      <div className="news">
        <div className="hinh_news">
          <img src={hinh3} alt="" style={{ width: "100%" }} />
        </div>
        <div className="info_news">
          <h4 style={{ fontSize: "40px" }}>
            WP And Vault By Vans Add Print Patchwork To The Authentic 44 DX
          </h4>
          <p style={{ fontWeight: "500" }}>
            Vault By Vans is responsible for the footwear icon’s most
            interesting projects, from highly-limited inline styles to
            collaborations with the likes of Brain Dead, Gallery Dept., and
            KITH. Soon, the sub-label will even be making their way to Italy,
            teaming up with retailer WP for a three-part collection centered
            around the Authentic 44 DX.
          </p>
          <a
            href="https://sneakernews.com/2023/06/05/wp-vault-by-vans-authentic-44-dx-release-info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Read Now</button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
