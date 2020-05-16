import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { Dashboard as BIDashboard } from 'powerbi-report-component';

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
        <BIDashboard
   tokenType="Embed"
   accessToken="H4sIAAAAAAAEACWWtw60CBKE3-VPWQk_wEob4L33ZHjv3cDp3v1Ge3kFXdXm6__8sdJnmNPiz99__HaTU0ABhC3CwDpGFlJ_FJCDFWSieXIiVEtWJVNT0tpEBczPpW8VYWxd47mSzfBUoCAqwpyFsPXKdN6zdF8noJjNJy9OIZ_XTkYRl_zZZ5EEGetGoLD2oW_oOG-328mr1bb4wYsrVYexmRwVdor5sFSpyltB1sRxCOcIkSaUKn1yVdt5O2vA8WgzjRmkjxnY6dzDu4mMUcIiYV6xqdy8i6CPqeMViXWdBxQ7CS-wJHHRkIWr4ASPq-T8bOF4uQ5WVBLW0ExZOHDZByo0l_O4byXnYVMyK5-wTWth1sUu-DcpW5HwdMcN_Ax3cGdFZKKlmPbmLCKepyfYHpXUS_8gD-0OP1-6WXtx8TkcLbdPM9ZoPPUnqCYn0o-NWc74yNCyk1u1BZO-QOcwjlbXw4h3fdsEs9Au2o4S9DbXuHZCrcQkiXhoH-i2meCVNYtVpSiPXl3v4bHB3OyHuUT-lRnoNWsIIAWmW5AbuhAZP_sRMWpIFXZYjl8CDtSsgYMRxyjL-3hUilzkrWB80iR08JzdnA6gp3kj4mdtfvEcrENIo5MkmObu2pX30dpxOR1gzZv26ZQANhnJhkP-kDW9rp9KS9gbeJvjSGYgxK78_qiUv_OZMOfIx5Em0J6KcWF-MXbVLIsuPzS24GVhcAyFZ-rO8NHDo1uAxvcby04fzyqajEgRT9EG5vx8XASJ0nJvGh_UjrYMkxtoNgVgh2MGD-9XcaWQgZs0_GWYKGtjk6o6wFtThVZsI_6ABjdsesnqnEqdEpRsJ56_FPW56NOZwTM9p12DTJ_syMK9OxiJomu3C_XIRMdXDAq5EyeWpeDC0xWWcHpU3BPxD2AFXjCUBuu0q1rM1lD4JIv6JcbW18cRtPsMuJwwBQW9Vi9TDQtIIan49ZeZpgSv2p4URgU4Tp-mo7ctnLyB89yhIga4LOTkyrSgo3O1qlhT-L4IBWGAwNJnJPrMvVrlBfUkD1fHG0IYLhctFsetVINK_uWvRtrgfbx0wcyvd6yDHhdFQ-Hso7MdmNBOcZG-4ThjdESElET4Xtm7b50KTRcVhXSl9-n4brIW3-gQJVa3NB7huXWzRwl_i6V42H6hErJtxpxB_RCf3i17Jr48ExiegN4put0AovNrLhKm9zzs5pBOLYrNvIzttOGcAwWzcrca825O0Vt5kIm4o7roUXUYosNSiKy8mtNYUPIYmQ1IQrGu8hyxt6y4LxEfBnbveNS7eMGs9g1O6VwZ8-xx-6mCvhb9urLBVbh82nSF6ZacRPBm4y8nytzso8_5SYZVuTUJLYBgIdcRBZxSZYdhOXVBcpYwKhAHMKR9Sj2JH41hF3tGXd80istmEIsqLjIudmtzdi5iG1eZisbcee377kG-APLGx0nrIBlwc7SPq13N_TLMlwp8PH0Tx-a-QUmQXNY3A7ptr8jNCw_nGyxSaobeLNkJZG2fsOaO5LFU0CvDKlcHSRW6fuolPpdUlwE_gE1unhVYArTEITJ7iEp5DfgpPXe7rcckxtguOUBbx7pGIVCmUhH77gUEzhWSKINIfQGSgnexfXA1d7QxC588j3CvKknwEdJ14A3eUsEYs3UgEYrz2RBj9SAKIZf2yBGmVeYsQBy8X3zvEaRidbK23W3EdlSxwFuISeyDI1iNlQ2lca2ve_UoHuv5hBMxxemh3GGO9el5rLEMXoxS2f6ZsTtyCy61TT01MNffvU-c20BoOLh2Yq3bC7w1Q56ENpg6vS3P7wdGktdjnNBd_J1SebPVV3SMqtjb4-YBw6Lfw1hJPDcqr1Ju-Zc1l3I8QfvK1UYXieI7VZBgFOrXfBdIQFbRt03sSWapVsKvRIiXNQOtfWtcWcXB4y2gNaGgpL6Fta8JhyAqm_I7sqVZtMRf85FRMgQZJn-6EDJm6v1OA5z2k93tG_WllSyv7E2TREizC2G4eMUFQbGzJ5AxiNBc1elp3sQIhlzyQO39QLff9O8JsHqIwLksXmY72x6tYrltu_g2x21mxu2IVU2aMz5mKWkuA46hVHKgb69H9Pix150a4xeUs47AY_c11jnuSoOSy7vcIvvFj4kWkZql268N0rbpr3fyhUP4atW9IZOiyvtBalJanhIg1JcupTKCTfG5s0CAvT816KASfYGbXeQnRLyO9rrVQNSxs-4SFNuQBb7ZAi1630GddX0FRXugJsXkpFG3wX5fIaqs5ZKmGA9u-59__vz1h92e5ZjV8vm9KZqwxmi2Z3w7IQ5mij1Pj-EPRNkc7fIB44CyZGrGi0mi4e4HOyVbjX2eXVWja3SWnkG6mGfR89nPoog5kAQn7L1gTd0nrRLXBpGHd9wqpw_5JWgNwi8Dl9ift-tYaKTaxHrnxlAkwUxlkMh6QhJjB4lLzJQbRL-1LKcs9sZJqnP5ESdlOzmt0s5nrURQBtKD0LF44ofMvvz9XerzG9vXmPQOXVx0PGfXrn4-mxdnAP9-0Wkn_GeCQj2FaBQdmjth3Ro5em3yUUMQ7NoFWFGtQqfjpdiwuLL9LaCy0SliBwdKmQcru6MjNspSqo5QtrFk94tOK36C5E4HCdp2rbXhU2pD_z_mZ2nKTQ5-KUef8m0SxqXR2qJyddHOyDnvf1VuW0_pcW7lT7ayBMa5Z48Ru0F8SO5Gabzhq1ciAGrwzWsRXzzs9EQ9OqORqayxT9IT2kI_SCNt2cYkHGil5eR0wo8FbvU38GbPOYntAgOwJlMiM6QLMqDIEwqJEEod9495hfMgTXcGdc80-pIBEiMm06qgxU_uuUUX0bIQQe1hiu4AriXkUeq87YtY9G661UwYxQ1dN-sJuQ9hhlvOtGUb1FZKq6D55IfKlg5-atFOEpBss9Y_gHDIOf0QBhIBIpoidTtxE6wl0t64-NlqtkxpPEPkSTofkPTiGSP7KnLygKR3W2tJ5aNP1rzdzRRhBV1GPmS7r65GkJKXczgxx4IYhJekHFZkIHz-24z__g_eTezTmgsAAA=="
   embedUrl="https://app.powerbi.com/dashboardEmbed?dashboardId=b5f50796-6e97-4dc5-a755-00cf4405e029&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19"
   embedId="b5f50796-6e97-4dc5-a755-00cf4405e029"
   pageView="fitToWidth" // 'fitToWidth' (default) , 'oneColumn', 'actualSize'
   onLoad={(dashboard) => {
     console.log('Dashboard Loaded!');
   }}
   onTileClicked={(data) => {
     console.log('Data from tile', data);
   }}
 />

        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                )
              }
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
