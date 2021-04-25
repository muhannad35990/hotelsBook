import React from "react";
import logo from "../../img/favicon.png";
import profile from "../../img/user-6.jpg";
import ForumIcon from "@material-ui/icons/Forum";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { Badge, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  badge: {
    fontSize: 13,
    fontWeight: 500,
  },
}));
function Toolbar() {
  const classes = useStyles();
  return (
    <nav className="Nav">
      <div className="Nav__left">
        <img src={logo} alt="" className="Nav__logo" />
        <input
          type="text"
          className="Nav__search"
          placeholder="Search hotels"
        />
      </div>
      <div className="Nav__right">
        <div className="Nav__icons">
          <IconButton>
            <Badge
              badgeContent={4}
              color="secondary"
              classes={{ badge: classes.badge }}
            >
              <BookmarkIcon style={{ fontSize: 20 }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge
              badgeContent={2}
              color="secondary"
              classes={{ badge: classes.badge }}
            >
              <ForumIcon style={{ fontSize: 20 }} />
            </Badge>
          </IconButton>
        </div>

        <img src={profile} alt="" className="Nav__profile" />
        <h3 className="Nav__right__name">Jenne</h3>
      </div>
    </nav>
  );
}

export default Toolbar;
