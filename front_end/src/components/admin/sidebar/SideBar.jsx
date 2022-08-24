import FeedbackIcon from '@mui/icons-material/Feedback';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import MailIcon from '@mui/icons-material/Mail';
import MessageIcon from '@mui/icons-material/Message';
import MoneyIcon from '@mui/icons-material/Money';
import PersonIcon from '@mui/icons-material/Person';
import ReportIcon from '@mui/icons-material/Report';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function SideBar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebarWrapper">
          {/* dashboard */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to={"/"} className="link">
                <li className="sidebarListItem">
                  <LineStyleIcon className="sidebarIcon" />
                  Home
                </li>
              </Link>

              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarIcon" />
                Sales
              </li>
            </ul>
          </div>
          {/* quick menu */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link to={"users"} className="link">
                <li className="sidebarListItem">
                  <PersonIcon className="sidebarIcon" />
                  Users
                </li>
              </Link>
              <Link to={"products"} className="link">
                <li className="sidebarListItem">
                  <StorefrontIcon className="sidebarIcon" />
                  Products
                </li>
              </Link>

              <li className="sidebarListItem">
                <MoneyIcon className="sidebarIcon" />
                Transactions
              </li>
              <li className="sidebarListItem">
                <ReportIcon className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
          {/* notifications */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailIcon className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <FeedbackIcon className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <MessageIcon className="sidebarIcon" />
                Message
              </li>
            </ul>
          </div>
          {/* Staff */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutlineIcon className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <ReportIcon className="sidebarIcon" />
                Report
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
