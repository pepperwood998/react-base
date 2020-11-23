import React from "react";
import NavigationTabLayout from "../../../components/layouts/navigation-tab";
import ProfileRouting from "./Profile.route";

function Profile() {
  return (
    <NavigationTabLayout
      items={[
        {
          label: "Account",
          href: "/launcher/profile/account"
        },
        {
          label: "Settings",
          href: "/launcher/profile/settings"
        }
      ]}
    >
      <ProfileRouting />
    </NavigationTabLayout>
  );
}

export default Profile;
