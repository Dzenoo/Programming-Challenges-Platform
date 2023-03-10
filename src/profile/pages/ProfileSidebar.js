import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SettingsIcon from "@mui/icons-material/Settings";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import BookIcon from "@mui/icons-material/Book";

const ListItems = [
  {
    id: "0",
    name: "Profile",
    icon: <SettingsIcon />,
  },
  {
    id: "1",
    name: "Achievements",
    icon: <EmojiEventsIcon />,
  },
  {
    id: "2",
    name: "Challenges",
    icon: <BookmarksIcon />,
  },
  {
    id: "3",
    name: "Plan",
    icon: <LocalOfferIcon />,
  },
];

const ProfileSidebar = (props) => {
  return (
    <Card
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <CardMedia
        image="https://res.cloudinary.com/dzwb60tk1/image/upload/v1676845690/Blue_Yellow_Black_Photo_How_To_Sell_Online_Youtube_Thumbnail_illxkc.png"
        sx={{ borderRadius: "100%", width: "200px", height: "200px" }}
      ></CardMedia>
      <CardContent>
        <Typography variant="h4">Dzen00</Typography>
        <Typography variant="h6" fontWeight={2} color="textSecondary">
          dgudzevic00@gmail.com
        </Typography>
        <List>
          {ListItems.map((li) => (
            <ListItem key={li.id}>
              <Button
                onClick={() => props.onFilterPage(li.id)}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1.2em",
                }}
                variant="outlined"
              >
                {li.icon}
                {li.name}
              </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ProfileSidebar;
