import React from "react";
import Logo from "../components/design/logo";
import SellerButton from "../components/design/SellerButton";
import SearchHeader from "../components/design/SearchHeader";
import SideMenu from "../components/design/SideMenu";
import SocialCard from "../components/design/SocialCard";
import ArtistCards from "../components/design/ArtistCards";
import ProductSlider from "../components/design/ProductSlider";
import { extraPosts, posts } from "../utils";
import Breadcrumb from "../components/Breadcrumb";

function Home() {
  return (
    <>
      <Breadcrumb />
      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "0 auto",
          marginTop: "20px",
          gap: "30px",
        }}
      >
        <div className="flex flex-col gap-5 w-1/4">
          <div>
            <Logo />
          </div>
          <div>
            <SideMenu />
          </div>
        </div>

        <div className="flex flex-col gap-5 w-1/2">
          <div className="w-full">
            <SearchHeader />
          </div>
          <div className="max-h-[80vh] overflow-y-scroll container">
            <SocialCard posts={posts} />
            <ProductSlider />
            <SocialCard posts={extraPosts} />
          </div>
        </div>

        <div className="flex flex-col gap-5 w-1/4">
          <div className="w-full">
            <SellerButton />
          </div>
          <div>
            <ArtistCards />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
