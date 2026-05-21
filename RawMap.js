const Stop_Name = "Stop_Name";
const Stop_Type = "Stop_Type";
const DownLine = "DownLine";

const NodeStop = "NodeStop";
const NodeRoutes = "NodeRoutes";
const position = "position";

const Node1 = "Node1";
const Node2 = "Node2";
const Node3 = "Node3";
const Node4 = "Node4";
const Node5 = "Node5";
const Node6 = "Node6";
const Node7 = "Node7";
const Node8 = "Node8";
const Node9 = "Node9";
const Node10 = "Node10";

const UP = "UP";
const DN = "DN";

const Regular = "Regular";
const Route_Status = "Route_Status";

const RouteCourse = "RouteCourse";

const RouteNo = "RouteNo";
const From = "From";
const To = "To";
const Note = "Note";
const UP_Distance = "UP_Distance";
const DN_Distance = "DN_Distance";

const InterChangeRoutes = "InterChangeRoutes";

const RouteDirection = "RouteDirection";
const StopLandMark = "StopLandMark";

const REVERSE = "REVERSE";
const STAGE = "STAGE";

/* Popular Bus Stops Short Names */
const CBS = "Central Bus Station (CBS)";
const JBS = "Jubliee Bus Station (JBS)";
const MGBS = "MG Bus Station (MGBS)";

const SEC_BS = "Secunderabad BS";
const SEC_RTF = "Secunderabad RTF";
const SEC_CS = "Secunderabad CS";
const SEC_ALF = "Secunderabad ALF";
const SEC_GRD = "Secunderabad GRD";
const SEC_ORTF = "Secunderabad ORTF";

const KOTI_W = "Koti Womens College";
const KOTI_M = "Koti Medical College";
const KOTI_B = "Koti Bus Station";

const KCGX = "Kacheguda X Roads";
const KCGS = "Kacheguda Station";
const KCGT = "Kacheguda Tourist";

const UPLX = "Uppal Ring Road";

const CGCLX = "Chengicherla X Roads";
const CGCL = "Chengicherla";

const LBNR = "LB Nagar";

const ECILX = "ECIL X Roads";

const MYPX = "Miyapur X Roads";
const CRPLSTN = "Cherlapally Station (New Terminal)";
const CDRYGT = "Chandrayangutta X Roads";

let Stops = {

    "__SEC_ALF__": {
        Stop_Name: SEC_ALF,

        Node1: {
            NodeStop: "Clock Tower",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8C, 8C/85P, 8M, 8UA, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: UP
        },

        Node2: {
            NodeStop: "Patny",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF, 219, 219I, 219P",
            position: UP
        },
    },

    "__SEC_GRD__": {
        Stop_Name: SEC_GRD,

        Node1: {
            NodeStop: "Patny",
            NodeRoutes: "1/25S, 1/25S/229, 1D/229, 1P/25S, 1Z/229, 2/25S",
            position: UP
        },
    },

    "__SEC_BS__": {
        Stop_Name: SEC_BS,

        Node1: {
            NodeStop: "Alugadda Bhavi",
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG, 16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P, 16PX",
            position: UP
        },
    },

    "__SEC_RTF__": {
        Stop_Name: SEC_RTF,

        Node1: {
            NodeStop: "Chilkalguda X Roads",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: UP
        },

        Node2: {
            NodeStop: JBS,
            NodeRoutes: "",
            position: DN
        },

        Node3: {
            NodeStop: SEC_GRD,
            NodeRoutes: "1/25S, 1/25S/229, 1D/229, 1P/25S, 1Z/229, 2/25S",
            position: UP
        },
    },

    "__Alugadda_Bhavi__": {
        Stop_Name: "Alugadda Bhavi",

        Node1: {
            NodeStop: "Mettuguda",
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG, 16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P, 16PX",
            position: UP
        },

        Node2: {
            NodeStop: "Sangeeth",
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG, 16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P, 16PX",
            position: DN
        },

        Node3: {
            NodeStop: "Chilkalguda X Roads",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16R/20, 16S/10YF",
            position: UP
        },

        Node4: {
            NodeStop: "Mettuguda",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: DN
        },
    },

    "__Mettuguda__": {
        Stop_Name: "Mettuguda",

        Node1: {
            NodeStop: "New Bridge",
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG, 16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P, 16PX",
            position: UP
        },

        Node2: {
            NodeStop: "Alugadda Bhavi",
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG, 16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P, 16PX",
            position: DN
        },

        Node3: {
            NodeStop: "Alugadda Bhavi",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16R/20, 16S/10YF",
            position: UP
        },

        Node4: {
            NodeStop: "New Bridge",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16R/20, 16S/10YF",
            position: DN
        },
    },

    "__New_Bridge__": {
        Stop_Name: "New Bridge",

        Node1: {
            NodeStop: "Lalaguda",
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG, 16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P, 16PX",
            position: UP
        },

        Node2: {
            NodeStop: "Mettuguda",
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG, 16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P, 16PX",
            position: DN
        },

        Node3: {
            NodeStop: "Mettuguda",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16R/20, 16S/10YF",
            position: UP
        },

        Node4: {
            NodeStop: "Lalaguda",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16R/20, 16S/10YF",
            position: DN
        },
    },

    "__Lalaguda__": {
        Stop_Name: "Lalaguda",

        Node1: {
            NodeStop: "Mirzalguda",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P, 16PX",
            position: UP
        },

        Node2: {
            NodeStop: "Noorie Pan Shop",
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG",
            position: UP
        },

        Node3: {
            NodeStop: "New Bridge",
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG, 16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P",
            position: DN
        },

        Node4: {
            NodeStop: "New Bridge",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16R/20, 16S/10YF",
            position: UP
        },

        Node5: {
            NodeStop: "Noorie Pan Shop",
            NodeRoutes: "15H/20, 15D/20",
            position: DN
        },

        Node6: {
            NodeStop: "Mirzalguda",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16R/20, 16S/10YF",
            position: DN
        },
    },

    "__Mirzalguda__": {
        Stop_Name: "Mirzalguda",

        Node1: {
            NodeStop: "Sri Sai Ram Theater",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P, 16PX",
            position: UP
        },

        Node2: {
            NodeStop: "Lalaguda",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P",
            position: DN
        },

        Node3: {
            NodeStop: "Lalaguda",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node4: {
            NodeStop: "Sri Sai Ram Theater",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: DN
        },
    },

    "__Sri_Sai_Ram_Theater__": {
        Stop_Name: "Sri Sai Ram Theater",

        Node1: {
            NodeStop: "Malkajgiri",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P, 16PX",
            position: UP
        },

        Node2: {
            NodeStop: "Mirzalguda",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P, 16PX",
            position: DN
        },

        Node3: {
            NodeStop: "Mirzalguda",
            NodeRoutes: "14PX, 16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node4: {
            NodeStop: "Malkajgiri",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: DN
        },

    },

    "__Malkajgiri__": {
        Stop_Name: "Malkajgiri",

        Node1: {
            NodeStop: "Anutex",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Sardar Patel Nagar",
            NodeRoutes: "16P, 16PX",
            position: UP
        },

        Node3: {
            NodeStop: "Sri Sai Ram Theater",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P",
            position: DN
        },

        Node4: {
            NodeStop: "Sri Sai Ram Theater",
            NodeRoutes: "14PX, 16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node5: {
            NodeStop: "Anutex",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: DN
        },
    },

    "__Anutex__": {
        Stop_Name: "Anutex",

        Node1: {
            NodeStop: "Vani Nagar",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Malkajgiri",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY",
            position: DN
        },

        Node3: {
            NodeStop: "Malkajgiri",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node4: {
            NodeStop: "Vani Nagar",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: DN
        },
    },

    "__Vani_Nagar__": {
        Stop_Name: "Vani Nagar",

        Node1: {
            NodeStop: "RK Nagar",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Anutex",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY",
            position: DN
        },

        Node3: {
            NodeStop: "Anutex",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node4: {
            NodeStop: "RK Nagar",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: DN
        },
    },

    "__RK_Nagar__": {
        Stop_Name: "RK Nagar",

        Node1: {
            NodeStop: "Anandh Bagh X Roads",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Vani Nagar",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY",
            position: DN
        },

        Node3: {
            NodeStop: "Vani Nagar",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node4: {
            NodeStop: "Anandh Bagh X Roads",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: DN
        },
    },

    "__Anandh_Bagh_X_Roads__": {
        Stop_Name: "Anandh Bagh X Roads",

        Node1: {
            NodeStop: "Safilguda",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16D, 16D/24B, 16NY",
            position: UP
        },

        Node2: {
            NodeStop: "East Anandh Bagh",
            NodeRoutes: "16CR, 16H",
            position: UP
        },

        Node3: {
            NodeStop: "RK Nagar",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY",
            position: DN
        },

        Node4: {
            NodeStop: "RK Nagar",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node5: {
            NodeStop: "Safilguda Station",
            NodeRoutes: "16C/38T, 16CR/38T, 16ES",
            position: UP
        },

        Node6: {
            NodeStop: "Safilguda",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16ES",
            position: DN
        }
    },

    "__Safilguda__": {
        Stop_Name: "Safilguda",

        Node1: {
            NodeStop: "Krupa Complex",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16D, 16D/24B, 16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Anandh Bagh X Roads",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16D, 16D/24B, 16NY",
            position: DN
        },

        Node3: {
            NodeStop: "Anandh Bagh X Roads",
            NodeRoutes: "16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16ES, 16S/10YF",
            position: UP
        },

        Node4: {
            NodeStop: "Krupa Complex",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16ES",
            position: DN
        }
    },

    "__Krupa_Complex__": {
        Stop_Name: "Krupa Complex",

        Node1: {
            NodeStop: "Vinayak Nagar (Neredmet)",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16D, 16D/24B, 16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Safilguda",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16D, 16D/24B, 16NY",
            position: DN
        },

        Node3: {
            NodeStop: "Safilguda",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16ES",
            position: UP
        },

        Node4: {
            NodeStop: "Vinayak Nagar (Neredmet)",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16ES",
            position: DN
        }
    },

    "__Vinayak_Nagar_(Neredmet)__": {
        Stop_Name: "Vinayak Nagar (Neredmet)",

        Node1: {
            NodeStop: "Three Temples",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16D, 16D/24B, 16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Vinayak Nagar Gate",
            NodeRoutes: "16C, 16C/281, 16CD",
            position: UP
        },

        Node3: {
            NodeStop: "Krupa Complex",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16D, 16D/24B, 16NY",
            position: DN
        },

        Node3: {
            NodeStop: "Krupa Complex",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16ES",
            position: UP
        },

        Node4: {
            NodeStop: "Three Temples",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: DN
        }
    },

    "__Vinayak_Nagar_Gate__": {
        Stop_Name: "Vinayak Nagar Gate",

        Node1: {
            NodeStop: "Santhoshima Colony",
            NodeRoutes: "16C, 16C/281, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: "Vinayak Nagar (Neredmet)",
            NodeRoutes: "16C, 16C/281, 16CD",
            position: DN
        },
    },

    "__Vinayak_Nagar_Gate__": {
        Stop_Name: "Vinayak Nagar Gate",

        Node1: {
            NodeStop: "Santhoshima Colony",
            NodeRoutes: "16C, 16C/281, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: "Vinayak Nagar (Neredmet)",
            NodeRoutes: "16C, 16C/281, 16CD",
            position: DN
        },

        Node3: {
            NodeStop: "Vinayak Nagar (Neredmet)",
            NodeRoutes: "16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16ES",
            position: UP
        },

        Node4: {
            NodeStop: "Santhoshima Colony",
            NodeRoutes: "16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16ES",
            position: DN
        },
    },

    "__Santhoshima_Colony__": {
        Stop_Name: "Santhoshima Colony",

        Node1: {
            NodeStop: "Old Safilguda",
            NodeRoutes: "16C, 16C/281, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: "Vinayak Nagar Gate",
            NodeRoutes: "16C, 16C/281, 16CD",
            position: DN
        },

        Node3: {
            NodeStop: "Vinayak Nagar Gate",
            NodeRoutes: "16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16ES",
            position: UP
        },

        Node4: {
            NodeStop: "Old Safilguda",
            NodeRoutes: "16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16ES",
            position: DN
        },
    },

    "__Old_Safilguda__": {
        Stop_Name: "Old Safilguda",

        Node1: {
            NodeStop: "Sainathpuram",
            NodeRoutes: "16C, 16C/281, 16CD, 16CR",
            position: UP
        },

        Node2: {
            NodeStop: "Santhoshima Colony",
            NodeRoutes: "16C, 16C/281, 16CD",
            position: DN
        },

        Node3: {
            NodeStop: "Bharath Nagar (MLY)",
            NodeRoutes: "16CR",
            position: DN
        },

        Node4: {
            NodeStop: "Santhoshima Colony",
            NodeRoutes: "16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16ES",
            position: UP
        },

        Node5: {
            NodeStop: "Sainathpuram",
            NodeRoutes: "16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16ES",
            position: DN
        },

        Node6: {
            NodeStop: "Bharath Nagar (MLY)",
            NodeRoutes: " 16CR/38T",
            position: UP
        },
    },

    "__Sainathpuram__": {
        Stop_Name: "Sainathpuram",

        Node1: {
            NodeStop: "Sainathpuram Officers Colony",
            NodeRoutes: "16C, 16C/281, 16CD, 16CR",
            position: UP
        },

        Node2: {
            NodeStop: "Old Safilguda",
            NodeRoutes: "16C, 16C/281, 16CD, 16CR",
            position: DN
        },

        Node3: {
            NodeStop: "Old Safilguda",
            NodeRoutes: "16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16ES",
            position: UP
        },

        Node4: {
            NodeStop: "Sainathpuram Officers Colony",
            NodeRoutes: "16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16ES",
            position: DN
        },
    },

    "__Sainathpuram_Officers_Colony__": {
        Stop_Name: "Sainathpuram Officers Colony",

        Node1: {
            NodeStop: "Officers Colony",
            NodeRoutes: "16C, 16C/281, 16CD, 16CR",
            position: UP
        },

        Node2: {
            NodeStop: "Sainathpuram",
            NodeRoutes: "16C, 16C/281, 16CD, 16CR",
            position: DN
        },

        Node3: {
            NodeStop: "Sainathpuram",
            NodeRoutes: "16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16ES",
            position: UP
        },

        Node4: {
            NodeStop: "Officers Colony",
            NodeRoutes: "16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16ES",
            position: DN
        },
    },

    "__Officers_Colony__": {
        Stop_Name: "Officers Colony",

        Node1: {
            NodeStop: "Sharada Theater",
            NodeRoutes: "16C, 16C/281, 16CD, 16CR",
            position: UP
        },

        Node2: {
            NodeStop: "Sainathpuram Officers Colony",
            NodeRoutes: "16C, 16C/281, 16CD, 16CR",
            position: DN
        },

        Node3: {
            NodeStop: "Sainathpuram Officers Colony",
            NodeRoutes: "16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16ES",
            position: UP
        },

        Node4: {
            NodeStop: "Sharada Theater",
            NodeRoutes: "16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16ES",
            position: DN
        },
    },

    "__Three_Temples__": {
        Stop_Name: "Three Temples",

        Node1: {
            NodeStop: "Neredmet Old PS",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16D, 16D/24B, 16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Vinayak Nagar (Neredmet)",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16D, 16D/24B, 16NY",
            position: DN
        },

        Node3: {
            NodeStop: "Vinayak Nagar (Neredmet)",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Neredmet Old PS",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: DN
        }
    },

    "__Neredmet_Old_PS__": {
        Stop_Name: "Neredmet Old PS",

        Node1: {
            NodeStop: "Vajpayee Nagar",
            NodeRoutes: "16A, 16A/281R, 16AC, 16D, 16D/24B, 16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Kakathiya Nagar",
            NodeRoutes: "16AK",
            position: UP
        },

        Node3: {
            NodeStop: "Three Temples",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16D, 16D/24B, 16NY",
            position: DN
        },

        Node4: {
            NodeStop: "Three Temples",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: UP
        },

        Node5: {
            NodeStop: "Vajpayee Nagar",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: DN
        }
    },

    "__Kakathiya_Nagar__": {
        Stop_Name: "Kakathiya Nagar",

        Node1: {
            NodeStop: "East Kakathiya Nagar",
            NodeRoutes: "16AK",
            position: UP
        },

        Node2: {
            NodeStop: "Neredmet Old PS",
            NodeRoutes: "16AK",
            position: DN
        },
    },

    "__East_Kakathiya_Nagar__": {
        Stop_Name: "East Kakathiya Nagar",

        Node1: {
            NodeStop: "Vinoba Nagar",
            NodeRoutes: "16AK",
            position: UP
        },

        Node2: {
            NodeStop: "Kakathiya Nagar",
            NodeRoutes: "16AK",
            position: DN
        },
    },

    "__Vinoba_Nagar__": {
        Stop_Name: "Vinoba Nagar",

        Node1: {
            NodeStop: "Vayupuri",
            NodeRoutes: "16AK",
            position: UP
        },

        Node2: {
            NodeStop: "East Kakathiya Nagar",
            NodeRoutes: "16AK",
            position: DN
        },
    },

    "__Vajpayee_Nagar__": {
        Stop_Name: "Vajpayee Nagar",

        Node1: {
            NodeStop: "Neredmet X Roads",
            NodeRoutes: "16A, 16A/281R, 16AC, 16D, 16D/24B, 16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Neredmet Old PS",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16D, 16D/24B, 16NY",
            position: DN
        },

        Node3: {
            NodeStop: "Neredmet Old PS",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Neredmet X Roads",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: DN
        }
    },

    "__Neredmet_X_Roads__": {
        Stop_Name: "Neredmet X Roads",

        Node1: {
            NodeStop: "Vayupuri",
            NodeRoutes: "16A, 16A/281R, 16AC, 16D, 16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Defence Colony",
            NodeRoutes: "16NY",
            position: UP
        },

        Node3: {
            NodeStop: "Vajpayee Nagar",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16D, 16D/24B, 16NY",
            position: DN
        },

        Node4: {
            NodeStop: "Vajpayee Nagar",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: UP
        },

        Node5: {
            NodeStop: "Vayupuri",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: DN
        },
    },

    "__Defence_Colony__": {
        Stop_Name: "Defence Colony",

        Node1: {
            NodeStop: "Nirmal Nagar",
            NodeRoutes: "16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Neredmet X Roads",
            NodeRoutes: "16NY",
            position: DN
        },
    },

    "__Nirmal_Nagar__": {
        Stop_Name: "Nirmal Nagar",

        Node1: {
            NodeStop: "Defence College",
            NodeRoutes: "16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Defence Colony",
            NodeRoutes: "16NY",
            position: DN
        },
    },

    "__Defence_College__": {
        Stop_Name: "Defence College",

        Node1: {
            NodeStop: "Ammuguda Bazar",
            NodeRoutes: "16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Nirmal Nagar",
            NodeRoutes: "16NY",
            position: DN
        },
    },

    "__Ammuguda_Bazar__": {
        Stop_Name: "Ammuguda Bazar",

        Node1: {
            NodeStop: "Yapral Circle",
            NodeRoutes: "16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Defence College",
            NodeRoutes: "16NY",
            position: DN
        },

        Node3: {
            NodeStop: "EME Center",
            NodeRoutes: "16D/24B",
            position: UP
        },

        Node4: {
            NodeStop: "Yapral Circle",
            NodeRoutes: "16D/24B",
            position: DN
        },
    },

    "__Yapral_Circle__": {
        Stop_Name: "Yapral Circle",

        Node1: {
            NodeStop: "Yapral",
            NodeRoutes: "16NY",
            position: UP
        },

        Node2: {
            NodeStop: "Ammuguda Bazar",
            NodeRoutes: "16NY",
            position: DN
        },

        Node3: {
            NodeStop: "Ammuguda Bazar",
            NodeRoutes: "16D/24B",
            position: UP
        },

        Node4: {
            NodeStop: "Yapral",
            NodeRoutes: "16D/24B",
            position: DN
        },
    },

    "__Yapral__": {
        Stop_Name: "YapraL",

        Node1: {
            NodeStop: "Yapral Circle",
            NodeRoutes: "16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Yapral Circle",
            NodeRoutes: "16NY",
            position: DN
        },
    },

    "__Yapral_ZPHS__": {
        Stop_Name: "Yapral ZPHS",

        Node1: {
            NodeStop: "YapraL",
            NodeRoutes: "16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Hanuman Temple (Yapral)",
            NodeRoutes: "16D/24B",
            position: DN
        },
    },

    "__Vayupuri__": {
        Stop_Name: "Vayupuri",

        Node1: {
            NodeStop: "Sainikpuri X Roads",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16D, 16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Neredmet X Roads",
            NodeRoutes: "16A, 16A/281R, 16AC, 16D, 16D/24B",
            position: DN
        },

        Node3: {
            NodeStop: "Vinoba Nagar",
            NodeRoutes: "16AK",
            position: DN
        },

        Node4: {
            NodeStop: "Neredmet X Roads",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: UP
        },

        Node5: {
            NodeStop: "Sainikpuri X Roads",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: DN
        },
    },

    "__Sainikpuri_X_Roads__": {
        Stop_Name: "Sainikpuri X Roads",

        Node1: {
            NodeStop: "Sharada Theater",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16D, 16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Vayupuri",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16D, 16D/24B",
            position: DN
        },

        Node3: {
            NodeStop: "Vayupuri",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Sharada Theater",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: DN
        },
    },

    "__Sharada_Theater__": {
        Stop_Name: "Sharada Theater",

        Node1: {
            NodeStop: "AS Rao Nagar",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16CR, 16D, 16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Sainikpuri X Roads",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16D, 16D/24B",
            position: DN
        },

        Node3: {
            NodeStop: "Officers Colony",
            NodeRoutes: "16C, 16C/281, 16CD, 16CR",
            position: DN
        },

        Node4: {
            NodeStop: "Sainikpuri X Roads",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16D/5K, 16D/49M",
            position: UP
        },

        Node5: {
            NodeStop: "Officers Colony",
            NodeRoutes: "16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16ES",
            position: UP
        },

        Node6: {
            NodeStop: "AS Rao Nagar",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16ES",
            position: DN
        },
    },

    "__East_Anandh_Bagh__": {
        Stop_Name: "East Anandh Bagh",

        Node1: {
            NodeStop: "Anandh Bagh (NMDC)",
            NodeRoutes: "16CR, 16H",
            position: UP
        },

        Node2: {
            NodeStop: "Anandh Bagh X Roads",
            NodeRoutes: "16CR, 16H",
            position: DN
        },

        Node3: {
            NodeStop: "Anandh Bagh X Roads",
            NodeRoutes: "16CR/38T, 16H/47L, 16H/49M, 16R/20",
            position: UP
        },

        Node4: {
            NodeStop: "Anandh Bagh (NMDC)",
            NodeRoutes: "16CR/38T, 16H/47L, 16H/49M, 16R/20",
            position: DN
        },
    },

    "__Anandh_Bagh_(NMDC)__": {
        Stop_Name: "Anandh Bagh (NMDC)",

        Node1: {
            NodeStop: "Tirumala Nagar",
            NodeRoutes: "16CR, 16H",
            position: UP
        },

        Node2: {
            NodeStop: "East Anandh Bagh",
            NodeRoutes: "16CR, 16H",
            position: DN
        },

        Node3: {
            NodeStop: "East Anandh Bagh",
            NodeRoutes: "16CR/38T, 16H/47L, 16H/49M, 16R/20",
            position: UP
        },

        Node4: {
            NodeStop: "Tirumala Nagar",
            NodeRoutes: "16CR/38T, 16H/47L, 16H/49M, 16R/20",
            position: DN
        },
    },

    "__Sardar_Patel_Nagar__": {
        Stop_Name: "Sardar Patel Nagar",

        Node1: {
            NodeStop: "Prashanth Nagar",
            NodeRoutes: "16P, 16PX",
            position: UP
        },

        Node2: {
            NodeStop: "Malkajgiri",
            NodeRoutes: "16P",
            position: DN
        },

        Node3: {
            NodeStop: "Malkajgiri",
            NodeRoutes: "14PX",
            position: UP
        },
    },

    "__Noorie_Pan_Shop__": {
        Stop_Name: "Noorie Pan Shop",

        Node1: {
            NodeStop: "Shanthi Nagar",
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG",
            position: UP
        },

        Node2: {
            NodeStop: "Lalaguda",
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG",
            position: DN
        },

        Node3: {
            NodeStop: "Lalaguda",
            NodeRoutes: "15H/20, 15D/20",
            position: UP
        },

        Node4: {
            NodeStop: "Shanthi Nagar",
            NodeRoutes: "15H/20, 15D/20",
            position: DN
        },
    },

    "__Shanthi_Nagar__": {
        Stop_Name: "Shanthi Nagar",

        Node1: {
            NodeStop: "Lalapet Kaman",
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG",
            position: UP
        },

        Node2: {
            NodeStop: "Noorie Pan Shop",
            NodeRoutes: "14P, 15, 15D, 15H, 15H/242RG",
            position: DN
        },

        Node3: {
            NodeStop: "Noorie Pan Shop",
            NodeRoutes: "16PX, 15H/20, 15D/20",
            position: UP
        },

        Node4: {
            NodeStop: "Lalapet Kaman",
            NodeRoutes: "15H/20, 15D/20",
            position: DN
        },
    },

    "__Patny__": {
        Stop_Name: "Patny",

        Node1: {
            NodeStop: "Paradise",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF, 219, 219I, 219P",
            position: UP
        },

        Node2: {
            NodeStop: SEC_ALF,
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10W, 10Y, 10YF, 219, 219I, 219P",
            position: DN
        },
    },

    "__Paradise__": {
        Stop_Name: "Paradise",

        Node1: {
            NodeStop: "Wesley College",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Tarbund",
            NodeRoutes: "219, 219I, 219P, 227, 229",
            position: UP
        },

        Node3: {
            NodeStop: "Patny",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: DN
        },
    },

    "__Wesley_College__": {
        Stop_Name: "Wesley College",

        Node1: {
            NodeStop: "Police Lines",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Paradise",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: DN
        },
    },

    "__Police_Lines__": {
        Stop_Name: "Police Lines",

        Node1: {
            NodeStop: "Prakash Nagar",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Wesley College",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: DN
        },
    },

    "__Prakash_Nagar__": {
        Stop_Name: "Prakash Nagar",

        Node1: {
            NodeStop: "Begumpet",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Police Lines",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: DN
        },
    },

    "__Begumpet__": {
        Stop_Name: "Begumpet",

        Node1: {
            NodeStop: "Shyam Lal",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Prakash Nagar",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: DN
        },
    },

    "__Shyam_Lal__": {
        Stop_Name: "Shyam Lal",

        Node1: {
            NodeStop: "Begumpet HPS",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Begumpet",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: DN
        },
    },

    "__Begumpet_HPS__": {
        Stop_Name: "Begumpet HPS",

        Node1: {
            NodeStop: "Green Lands",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Shyam Lal",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16C/10H, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: DN
        },
    },

    "__Green_Lands__": {
        Stop_Name: "Green Lands",

        Node1: {
            NodeStop: "Lal Bunglow",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16C/10H, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Somajiguda Circle",
            NodeRoutes: "16A/47L, 16A/47W, 16A/49M, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M",
            position: UP
        },

        Node3: {
            NodeStop: "Begumpet HPS",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16C/10H, 16S/10YF",
            position: DN
        },

    },

    "__Somajiguda_Circle__": {
        Stop_Name: "Somajiguda Circle",

        Node1: {
            NodeStop: "Panjagutta",
            NodeRoutes: "16A/47L, 16A/47W, 16A/49M, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M",
            position: UP
        },

        Node2: {
            NodeStop: "Green Lands",
            NodeRoutes: "16A/47L, 16A/47W, 16A/49M, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M",
            position: DN
        },
    },

    "__Panjagutta__": {
        Stop_Name: "Panjagutta",

        Node1: {
            NodeStop: "Sulthan College",
            NodeRoutes: "16A/47L, 16A/47W, 16C/47L, 16H/47L",
            position: UP
        },

        Node2: {
            NodeStop: "NIMS New Gate",
            NodeRoutes: "16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: UP
        },

        Node3: {
            NodeStop: "Somajiguda Circle",
            NodeRoutes: "16A/47L, 16A/47W, 16A/49M, 16C/47L, 16C/49M, 16CD/49M, 16D/49M, 16H/47L, 16H/49M",
            position: DN
        },
    },

    "__NIMS_New_Gate__": {
        Stop_Name: "NIMS New Gate",

        Node1: {
            NodeStop: "Banjara Hills",
            NodeRoutes: "16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: UP
        },

        Node2: {
            NodeStop: "Panjagutta",
            NodeRoutes: "16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: DN
        },
    },

    "__Banjara_Hills__": {
        Stop_Name: "Banjara Hills",

        Node1: {
            NodeStop: "Care Hospital",
            NodeRoutes: "16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: UP
        },

        Node2: {
            NodeStop: "NIMS New Gate",
            NodeRoutes: "16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: DN
        },
    },

    "__Care_Hospital__": {
        Stop_Name: "Care Hospital",

        Node1: {
            NodeStop: "Pension Office",
            NodeRoutes: "16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: UP
        },

        Node2: {
            NodeStop: "Banjara Hills",
            NodeRoutes: "16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: DN
        },
    },

    "__Pension_Office__": {
        Stop_Name: "Pension Office",

        Node1: {
            NodeStop: "Masab Tank X Roads",
            NodeRoutes: "16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: UP
        },

        Node2: {
            NodeStop: "Care Hospital",
            NodeRoutes: "16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: DN
        },
    },

    "__Masab_Tank_X_Roads__": {
        Stop_Name: "Masab Tank X Roads",

        Node1: {
            NodeStop: "NMDC",
            NodeRoutes: "16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: UP
        },

        Node2: {
            NodeStop: "Pension Office",
            NodeRoutes: "16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: DN
        },
    },

    "__Sulthan_College__": {
        Stop_Name: "Sulthan College",

        Node1: {
            NodeStop: "TV9 Office",
            NodeRoutes: "16A/47L, 16A/47W, 16C/47L, 16H/47L, 17H/47W, 47L, 47W, 222A, 222L",
            position: UP
        },

        Node2: {
            NodeStop: "Panjagutta",
            NodeRoutes: "16A/47L, 16A/47W, 16C/47L, 16H/47L, 17H/47W, 47L, 47W, 222A, 222L",
            position: DN
        },
    },

    "__TV9_Office__": {
        Stop_Name: "TV9 Office",

        Node1: {
            NodeStop: "Sagar Society",
            NodeRoutes: "16A/47L, 16A/47W, 16C/47L, 16H/47L, 17H/47W, 47L, 47W, 222A, 222L",
            position: UP
        },

        Node2: {
            NodeStop: "Sulthan College",
            NodeRoutes: "16A/47L, 16A/47W, 16C/47L, 16H/47L, 17H/47W, 47L, 47W, 222A, 222L",
            position: DN
        },
    },

    "__Sagar_Society__": {
        Stop_Name: "Sagar Society",

        Node1: {
            NodeStop: "LV Prasad",
            NodeRoutes: "16A/47L, 16A/47W, 16C/47L, 16H/47L, 17H/47W, 47L, 47W, 222A, 222L",
            position: UP
        },

        Node2: {
            NodeStop: "TV9 Office",
            NodeRoutes: "16A/47L, 16A/47W, 16C/47L, 16H/47L, 17H/47W, 47L, 47W, 222A, 222L",
            position: DN
        },
    },

    "__LV_Prasad__": {
        Stop_Name: "LV Prasad",

        Node1: {
            NodeStop: "",
            NodeRoutes: "16A/47L, 16A/47W, 16C/47L, 16H/47L, 17H/47W, 47L, 47W, 222A, 222L",
            position: UP
        },

        Node2: {
            NodeStop: "Sagar Society",
            NodeRoutes: "16A/47L, 16A/47W, 16C/47L, 16H/47L, 17H/47W, 47L, 47W, 222A, 222L",
            position: DN
        },
    },

    "__Lal_Bunglow__": {
        Stop_Name: "Lal Bunglow",

        Node1: {
            NodeStop: "Ameerpet",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16C/10H, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Green Lands",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16C/10H, 16S/10YF",
            position: DN
        },
    },

    "__Satyam_X_Roads__": {
        Stop_Name: "Satyam X Roads",

        Node1: {
            NodeStop: "Mythrivanam",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16C/10H, 16S/10YF",
            position: UP
        },
    },

    "__Clock_Tower__": {
        Stop_Name: "Clock Tower",

        Node1: {
            NodeStop: "Swapnalok Complex",
            NodeRoutes: "7Z, 7Z/251, 8C, 8C/85P",
            position: UP
        },

        Node2: {
            NodeStop: "Bata",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8M, 8UA, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: UP
        },

        Node3: {
            NodeStop: "Sangeeth",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8C, 8C/85P, 8M, 8UA, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: DN
        },

        Node4: {
            NodeStop: "Sangeeth",
            NodeRoutes: "5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D",
            position: UP
        },

        Node5: {
            NodeStop: SEC_GRD,
            NodeRoutes: "5/5R, 5K/25S, 5K/229",
            position: UP
        },
    },

    "__Bata__": {
        Stop_Name: "Bata",

        Node1: {
            NodeStop: "Bible House",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8M, 8R, 8UA, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: UP
        },

        Node2: {
            NodeStop: "Patny Center",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8M, 8R, 8UA, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: DN
        },

        Node3: {
            NodeStop: "Patny Center",
            NodeRoutes: "5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229, 5R, 8/37",
            position: UP
        },
    },

    "__Bible_House__": {
        Stop_Name: "Bible House",

        Node1: {
            NodeStop: "Boats Club",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8M, 8R, 8UA, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: UP
        },

        Node2: {
            NodeStop: "Bata",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8M, 8R, 8UA, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: DN
        },

        Node3: {
            NodeStop: "Bata",
            NodeRoutes: "5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229, 5R, 8/37",
            position: UP
        },
    },

    "__Boats_Club__": {
        Stop_Name: "Boats Club",

        Node1: {
            NodeStop: "Tank Bund",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8M, 8R, 8UA, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: UP
        },

        Node2: {
            NodeStop: "Bible House",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8M, 8R, 8UA, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: DN
        },

        Node3: {
            NodeStop: "Bible House",
            NodeRoutes: "5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229, 5R, 8/37",
            position: UP
        },
    },

    "__Patny_Center__": {
        Stop_Name: "Patny Center",

        Node1: {
            NodeStop: "Clock Tower",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8C, 8C/85P, 8M, 8UA, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: DN
        },

        Node2: {
            NodeStop: "Patny",
            NodeRoutes: "8R",
            position: DN
        },

        Node3: {
            NodeStop: "Patny",
            NodeRoutes: "5R, 8/37",
            position: UP
        },

        Node4: {
            NodeStop: "Clock Tower",
            NodeRoutes: "5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229",
            position: UP
        },
    },

    "__Sangeeth__": {
        Stop_Name: "Sangeeth",

        Node1: {
            NodeStop: "Mother Teresa Statue",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8C, 8C/85P, 8M, 8UA",
            position: DN
        },

        Node2: {
            NodeStop: SEC_BS,
            NodeRoutes: "5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D",
            position: UP
        },

        Node3: {
            NodeStop: SEC_BS,
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG, 16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P, 16PX, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: DN
        },
    },

    "__Mother_Teresa_Statue__": {
        Stop_Name: "Mother Teresa Statue",

        Node1: {
            NodeStop: "Ganesh Temple (Sec-Bad)",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8C, 8C/85P, 8M, 8UA",
            position: DN
        },
    },

    "__Ganesh_Temple_(Sec-Bad)__": {
        Stop_Name: "Ganesh Temple (Sec-Bad)",

        Node1: {
            NodeStop: SEC_ALF,
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8C, 8C/85P, 8M, 8UA",
            position: DN
        },
    },

    "__Swapnalok_Complex__": {
        Stop_Name: "Swapnalok Complex",

        Node1: {
            NodeStop: "Paradise Center",
            NodeRoutes: "7Z, 7Z/251, 8C, 8C/85P",
            position: UP
        },

        Node2: {
            NodeStop: "Patny Center",
            NodeRoutes: "7Z, 7Z/251, 8C, 8C/85P",
            position: DN
        },
    },

    "__Paradise_Center__": {
        Stop_Name: "Paradise Center",

        Node1: {
            NodeStop: "James Street",
            NodeRoutes: "7Z, 7Z/251, 8C, 8C/85P",
            position: UP
        },

        Node2: {
            NodeStop: "Swapnalok Complex",
            NodeRoutes: "7Z, 7Z/251, 8C, 8C/85P",
            position: DN
        },

        Node3: {
            NodeStop: "Paradise",
            NodeRoutes: "8C/229",
            position: UP
        },
    },

    "__James_Street__": {
        Stop_Name: "James Street",

        Node1: {
            NodeStop: "Ranigunj",
            NodeRoutes: "7Z, 7Z/251, 8C, 8C/85P",
            position: UP
        },

        Node2: {
            NodeStop: "Paradise Center",
            NodeRoutes: "7Z, 7Z/251, 8C, 8C/85P",
            position: DN
        },

        Node3: {
            NodeStop: "Paradise Center",
            NodeRoutes: "8C/229",
            position: UP
        },
    },

    "__Ranigunj__": {
        Stop_Name: "Ranigunj",

        Node1: {
            NodeStop: "Tank Bund",
            NodeRoutes: "7Z, 7Z/251, 8C, 8C/85P",
            position: UP
        },

        Node2: {
            NodeStop: "James Street",
            NodeRoutes: "7Z, 7Z/251, 8C, 8C/85P",
            position: DN
        },

        Node3: {
            NodeStop: "James Street",
            NodeRoutes: "8C/229",
            position: UP
        },
    },

    "__Tank_Bund__": {
        Stop_Name: "Tank Bund",

        Node1: {
            NodeStop: "Liberty",
            NodeRoutes: "7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8UA",
            position: UP
        },

        Node2: {
            NodeStop: "Ranigunj",
            NodeRoutes: "7Z, 7Z/251, 8C, 8C/85P",
            position: DN
        },

        Node3: {
            NodeStop: "Boats Club",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8M, 8R, 8UA, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: DN
        },

        Node4: {
            NodeStop: "Secretariate",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 8C, 8C/85P, 8M, 8R, 15H/20, 15D/20, 16/20, 16A/20, 16R/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: UP
        },

        Node5: {
            NodeStop: "Boats Club",
            NodeRoutes: "5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229, 5R, 8/37",
            position: UP
        },

        Node6: {
            NodeStop: "Ranigunj",
            NodeRoutes: "8C/229",
            position: UP
        },

        Node7: {
            NodeStop: "Kavadiguda",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: DN
        },
    },

    "__Chilkalguda_X_Roads__": {
        Stop_Name: "Chilkalguda X Roads",

        Node1: {
            NodeStop: "Boiguda",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251, 15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: UP
        },

        Node2: {
            NodeStop: "Padmarao Nagar",
            NodeRoutes: "1P",
            position: UP
        },

        Node3: {
            NodeStop: SEC_RTF,
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: DN
        },


        Node4: {
            NodeStop: SEC_RTF,
            NodeRoutes: "1/25S, 1/25S/229, 1D/229, 1P/25S, 1Z/229, 2/25S",
            position: UP
        },

        Node5: {
            NodeStop: "Alugadda Bhavi",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: DN
        },

        Node6: {
            NodeStop: SEC_ALF,
            NodeRoutes: "16A/5K, 16A/10H, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/47L, 16C/49M, 16C/219, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16H/47L, 16H/49M, 16S/10YF",
            position: UP
        },
    },

    "__Boiguda__": {
        Stop_Name: "Boiguda",

        Node1: {
            NodeStop: "Gandhi Hospital",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251, 15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: UP
        },

        Node2: {
            NodeStop: "Chilkalguda X Roads",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251, 15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: DN
        },

        Node3: {
            NodeStop: "Chilkalguda X Roads",
            NodeRoutes: "1/25S, 1/25S/229, 1D/229, 1Z/229, 2/25S",
            position: UP
        },
    },

    "__Gandhi_Hospital__": {
        Stop_Name: "Gandhi Hospital",

        Node1: {
            NodeStop: "Musheerabad",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251, 15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: UP
        },

        Node2: {
            NodeStop: "Boiguda",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251, 15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: DN
        },


        Node3: {
            NodeStop: "Boiguda",
            NodeRoutes: "1/25S, 1/25S/229, 1D/229, 1Z/229, 2/25S",
            position: UP
        },
    },

    "__Musheerabad__": {
        Stop_Name: "Musheerabad",

        Node1: {
            NodeStop: "Raja Deluxe",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: UP
        },

        Node2: {
            NodeStop: "Gandhi Hospital",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251, 15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: DN
        },

        Node3: {
            NodeStop: "Gandhi Hospital Backside",
            NodeRoutes: "1P",
            position: DN
        },


        Node4: {
            NodeStop: "Gandhi Hospital",
            NodeRoutes: "1/25S, 1/25S/229, 1D/229, 1Z/229, 2/25S",
            position: UP
        },

        Node5: {
            NodeStop: "Gandhi Hospital Backside",
            NodeRoutes: "1P/25S",
            position: UP
        },

        Node6: {
            NodeStop: "Bholakpur",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: UP
        },
    },

    "__Bholakpur__": {
        Stop_Name: "Bholakpur",

        Node1: {
            NodeStop: "Kalpana",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: UP
        },

        Node2: {
            NodeStop: "Musheerabad",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: DN
        },
    },

    "__Kalpana__": {
        Stop_Name: "Kalpana",

        Node1: {
            NodeStop: "Kavadiguda",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: UP
        },

        Node2: {
            NodeStop: "Bholakpur",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: DN
        },
    },

    "__Kavadiguda__": {
        Stop_Name: "Kavadiguda",

        Node1: {
            NodeStop: "Tank Bund",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: UP
        },

        Node2: {
            NodeStop: "Kalpana",
            NodeRoutes: "15H/20, 15D/20, 16/20, 16A/20, 16R/20",
            position: DN
        },
    },

    "__Raja_Deluxe__": {
        Stop_Name: "Raja Deluxe",

        Node1: {
            NodeStop: "Golconda X Roads",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: UP
        },

        Node2: {
            NodeStop: "Musheerabad",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: DN
        },


        Node3: {
            NodeStop: "Musheerabad",
            NodeRoutes: "1/25S, 1/25S/229, 1D/229, 1P/25S, 1Z/229, 2/25S",
            position: UP
        },
    },

    "__Golconda_X_Roads__": {
        Stop_Name: "Golconda X Roads",

        Node1: {
            NodeStop: "RTC X Roads",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: UP
        },

        Node2: {
            NodeStop: "Raja Deluxe",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: DN
        },


        Node3: {
            NodeStop: "Raja Deluxe",
            NodeRoutes: "1/25S, 1/25S/229, 1D/229, 1P/25S, 1Z/229, 2/25S",
            position: UP
        },
    },

    "__RTC_X_Roads__": {
        Stop_Name: "RTC X Roads",

        Node1: {
            NodeStop: "Chikkadpally",
            NodeRoutes: "1, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539",
            position: UP
        },

        Node2: {
            NodeStop: "Bus Bhavan",
            NodeRoutes: "1B, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: UP
        },

        Node3: {
            NodeStop: "Golconda X Roads",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: DN
        },

        Node4: {
            NodeStop: "Golconda X Roads",
            NodeRoutes: "1/25S, 1/25S/229, 1D/229, 1P/25S, 1Z/229, 2/25S",
            position: UP
        },

        Node5: {
            NodeStop: "Ashok Nagar X Roads",
            NodeRoutes: "6IW/252, 6X",
            position: UP
        },

        Node6: {
            NodeStop: "Bus Bhavan",
            NodeRoutes: "6IW/252, 6X",
            position: DN
        },
    },

    "__Ashok_Nagar_X_Roads__": {
        Stop_Name: "Ashok Nagar X Roads",

        Node1: {
            NodeStop: "NTR Stadium",
            NodeRoutes: "6IW/252, 6X",
            position: UP
        },

        Node2: {
            NodeStop: "RTC X Roads",
            NodeRoutes: "6IW/252, 6X",
            position: DN
        },
    },

    "__NTR_Stadium__": {
        Stop_Name: "NTR Stadium",

        Node1: {
            NodeStop: "Ramakrishna Mutt",
            NodeRoutes: "6IW/252, 6X",
            position: UP
        },

        Node2: {
            NodeStop: "Ashok Nagar X Roads",
            NodeRoutes: "6IW/252, 6X",
            position: DN
        },
    },

    "__Ramakrishna_Mutt__": {
        Stop_Name: "Ramakrishna Mutt",

        Node1: {
            NodeStop: "Secretariate",
            NodeRoutes: "6IW/252, 6X",
            position: UP
        },

        Node2: {
            NodeStop: "NTR Stadium",
            NodeRoutes: "6IW/252, 6X",
            position: DN
        },
    },

    "__Chikkadpally__": {
        Stop_Name: "Chikkadpally",

        Node1: {
            NodeStop: "Narayanaguda",
            NodeRoutes: "1, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539",
            position: UP
        },

        Node2: {
            NodeStop: "RTC X Roads",
            NodeRoutes: "1, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539",
            position: DN
        },


        Node3: {
            NodeStop: "RTC X Roads",
            NodeRoutes: "1/25S, 1/25S/229, 1D/229, 1P/25S, 1Z/229",
            position: UP
        },
    },

    "__Narayanaguda__": {
        Stop_Name: "Narayanaguda",

        Node1: {
            NodeStop: "YMCA",
            NodeRoutes: "1, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539",
            position: UP
        },

        Node2: {
            NodeStop: "Chikkadpally",
            NodeRoutes: "1, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539",
            position: DN
        },

        Node3: {
            NodeStop: "Chikkadpally",
            NodeRoutes: "1/25S, 1/25S/229, 1D/229, 1P/25S, 1Z/229",
            position: UP
        },

        Node4: {
            NodeStop: "Himayath Nagar",
            NodeRoutes: "3K/6M, 3KN/6M, 6H, 6N/47W, 6NW, 6R, 6RK",
            position: UP
        },

        Node5: {
            NodeStop: "Barkatpura",
            NodeRoutes: "3K/6M, 3KN/6M, 6H, 6N/47W, 6NW",
            position: DN
        },

        Node6: {
            NodeStop: "Himayath Nagar",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node7: {
            NodeStop: "Barkatpura",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node8: {
            NodeStop: "Bagh Lingampally",
            NodeRoutes: "6R, 6RK",
            position: DN
        },
    },

    "__YMCA__": {
        Stop_Name: "YMCA",

        Node1: {
            NodeStop: "Kacheguda X Roads",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1X, 1Z, 1Z/251, 1Z/539",
            position: UP
        },

        Node2: {
            NodeStop: "Bagh Lingampally",
            NodeRoutes: "1B",
            position: DN
        },

        Node3: {
            NodeStop: "Barkatpura",
            NodeRoutes: "3N",
            position: UP
        },

        Node4: {
            NodeStop: "Kacheguda X Roads",
            NodeRoutes: "3N",
            position: DN
        },
    },

    "__KCGX__": {
        Stop_Name: KCGX,

        Node1: {
            NodeStop: "Sulthan Bazar",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1Z, 1Z/251, 1Z/539, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: KCGT,
            NodeRoutes: "1X",
            position: UP
        },

        Node3: {
            NodeStop: "Narayanaguda",
            NodeRoutes: "1X",
            position: DN
        },

        Node4: {
            NodeStop: "Sulthan Bazar",
            NodeRoutes: "3, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3N, 3T, 3Y",
            position: DN
        }
    },

    "__Sulthan_Bazar__": {
        Stop_Name: "Sulthan Bazar",

        Node1: {
            NodeStop: KOTI_W,
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1Z, 1Z/251, 1Z/539, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: KOTI_W,
            NodeRoutes: "3, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3N, 3T, 3Y",
            position: DN
        }
    },

    "__KOTI_W__": {
        Stop_Name: KOTI_W,

        Node1: {
            NodeStop: KOTI_M,
            NodeRoutes: "1, 1B, 1C, 1J, 1JL, 1JK, 1P, 1Z, 1Z/251, 1Z/539, 3K/95, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251",
            position: UP
        },

        Node2: {
            NodeStop: "Chaderghat",
            NodeRoutes: "1D, 1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS, 3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: UP
        },

        Node3: {
            NodeStop: "Chaderghat X Roads",
            NodeRoutes: "1K",
            position: UP
        },

        Node4: {
            NodeStop: "Ram Koti X Roads",
            NodeRoutes: "1, 1B, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1Z, 1Z/251, 1Z/539, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251, 3N/203N",
            position: DN
        },

        Node5: {
            NodeStop: "Ram Koti X Roads",
            NodeRoutes: "1/25S, 1/25S/229, 1D/229, 1P/25S, 1Z/229, 3, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3N, 3T, 3Y",
            position: UP
        },

        Node6: {
            NodeStop: KOTI_M,
            NodeRoutes: "3, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3N, 3T, 3Y, 9K/102",
            position: DN
        }
    },

    "__KOTI_M__": {
        Stop_Name: KOTI_M,

        Node1: {
            NodeStop: CBS,
            NodeRoutes: "1, 1B, 1C, 1J, 1JL, 1JK, 1P, 1Z, 1Z/251, 1Z/539, 3K/95, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251, 7Z, 7Z/251",
            position: UP
        },

        Node2: {
            NodeStop: CBS,
            NodeRoutes: "3, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3N, 3T, 3Y, 9K, 9K/230P, 9K/272G",
            position: DN
        },

        Node3: {
            NodeStop: "Abids GPO",
            NodeRoutes: "7Z, 7Z/251, 9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Abids GPO",
            NodeRoutes: "9K, 9K/230P, 9K/272G",
            position: UP
        }
    },

    "__KOTI_B__": {
        Stop_Name: KOTI_B,

        Node1: {
            NodeStop: KOTI_W,
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Ram_Koti_X_Roads__": {
        Stop_Name: "Ram Koti X Roads",

        Node1: {
            NodeStop: "Narayanaguda",
            NodeRoutes: "1, 1C, 1D, 1D/299, 1H, 1HD, 1J, 1JL, 1JK, 1K, 1L, 1MD, 1P, 1V, 1VM, 1VS, 1W, 1Z, 1Z/251, 1Z/539",
            position: DN
        },

        Node2: {
            NodeStop: "YMCA",
            NodeRoutes: "1B",
            position: DN
        },

        Node3: {
            NodeStop: KCGT,
            NodeRoutes: "3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251, 3N/203N",
            position: DN
        },

        Node4: {
            NodeStop: "Narayanaguda",
            NodeRoutes: "1/25S, 1/25S/229, 1D/229, 1P/25S, 1Z/229",
            position: UP
        },

        Node5: {
            NodeStop: KCGT,
            NodeRoutes: "3, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3T, 3Y",
            position: UP
        },

        Node6: {
            NodeStop: "YMCA",
            NodeRoutes: "3N",
            position: UP
        },
    },

    "__CBS__": {
        Stop_Name: CBS,

        Node1: {
            NodeStop: "Afzalgunj",
            NodeRoutes: "1, 1B, 1J, 1JL, 1JK, 1P, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2U, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251, 7Z, 7Z/251, 9A, 9F, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },

        Node2: {
            NodeStop: "Chaderghat X Roads",
            NodeRoutes: "1, 1B, 1C, 1J, 1JL, 1JK, 1P, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2U, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251",
            position: DN
        },


        Node3: {
            NodeStop: "Chaderghat X Roads",
            NodeRoutes: "1/25S, 1/25S/229, 1P/25S, 1Z/229, 2/25S, 3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y",
            position: UP
        },

        Node4: {
            NodeStop: "Afzalgunj",
            NodeRoutes: "3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 8M, 8R, 9K, 9K/230P, 9K/272G",
            position: DN
        },

        Node5: {
            NodeStop: KOTI_M,
            NodeRoutes: "7Z, 7Z/251",
            position: DN
        },

        Node6: {
            NodeStop: KOTI_M,
            NodeRoutes: "9K, 9K/230P, 9K/272G",
            position: UP
        }
    },

    "__Afzalgunj__": {
        Stop_Name: "Afzalgunj",

        // Direction = CBS to Afzalgunj

        Node1: {
            NodeStop: "Osmania Hospital",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: UP
        },

        Node2: {
            NodeStop: "Madina",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node3: {
            NodeStop: "Salarjung Museum",
            NodeRoutes: "2C, 2U, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P, 8UA",
            position: UP
        },

        Node4: {
            NodeStop: CBS,
            NodeRoutes: "1, 1B, 1J, 1JL, 1JK, 1P, 1Z, 1Z/251, 1Z/539, 2, 2C, 2J, 2U, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251, 7Z, 7Z/251, 9A, 9F, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D",
            position: DN
        },

        Node5: {
            NodeStop: CBS,
            NodeRoutes: "1/25S, 1/25S/229, 1P/25S, 1Z/229, 2/25S, 3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 8M, 8R, 9K, 9K/230P, 9K/272G",
            position: UP
        },

        Node6: {
            NodeStop: "Osmangunj",
            NodeRoutes: "8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8C, 8C/85P, 8M, 8R, 8UA, 16A/20",
            position: DN
        },

        Node7: {
            NodeStop: "Osmangunj",
            NodeRoutes: "8C/229, 9A, 9F, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },

        Node8: {
            NodeStop: "Salarjung Museum",
            NodeRoutes: "9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },

    },

    "__Salarjung Museum__": {
        Stop_Name: "Salarjung Museum",

        Node1: {
            NodeStop: "Darul Shifa",
            NodeRoutes: "2C, 2U, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P, 8UA",
            position: UP
        },

        Node2: {
            NodeStop: "Darul Shifa",
            NodeRoutes: "9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },
    },

    "__Darul_Shifa__": {
        Stop_Name: "Darul Shifa",

        Node1: {
            NodeStop: "Purani Havelli",
            NodeRoutes: "2C, 2U, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P, 8UA",
            position: UP
        },

        Node2: {
            NodeStop: "Purani Havelli",
            NodeRoutes: "9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },
    },

    "__Purani_Havelli__": {
        Stop_Name: "Purani Havelli",

        Node1: {
            NodeStop: "Bibi Bazar",
            NodeRoutes: "2C, 2U, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P, 8UA",
            position: UP
        },

        Node2: {
            NodeStop: "Bibi Bazar",
            NodeRoutes: "9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },
    },

    "__Bibi_Bazar__": {
        Stop_Name: "Bibi Bazar",

        Node1: {
            NodeStop: "Charminar",
            NodeRoutes: "2C, 2U, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P, 8UA",
            position: UP
        },

        Node2: {
            NodeStop: "Charminar",
            NodeRoutes: "9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },
    },

    "__Charminar__": {
        Stop_Name: "Charminar",

        Node1: {
            NodeStop: "Shah Ali Banda",
            NodeRoutes: "2C, 2U, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P, 8UA, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },
    },

    "__Shah_Ali_Banda__": {
        Stop_Name: "Shah Ali Banda",

        Node1: {
            NodeStop: "Lal Darwaja X Roads",
            NodeRoutes: "2C, 2U, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P, 8UA",
            position: UP
        },

        Node2: {
            NodeStop: "Himmatpura",
            NodeRoutes: "2C, 2U, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P, 8UA",
            position: DN
        },

        Node3: {
            NodeStop: "Himmatpura",
            NodeRoutes: "9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },
    },

    "__Himmatpura__": {
        Stop_Name: "Himmatpura",

        Node1: {
            NodeStop: "Khilwat",
            NodeRoutes: "2C, 2U, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P, 8UA",
            position: DN
        },

        Node2: {
            NodeStop: "Khilwat",
            NodeRoutes: "9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },
    },

    "__Khilwat__": {
        Stop_Name: "Khilwat",

        Node1: {
            NodeStop: "Moosa Bowli",
            NodeRoutes: "2C, 2U, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P, 8UA",
            position: DN
        },

        Node2: {
            NodeStop: "Moosa Bowli",
            NodeRoutes: "9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },
    },

    "__Moosa_Bowli__": {
        Stop_Name: "Moosa Bowli",

        Node1: {
            NodeStop: "City College",
            NodeRoutes: "2C, 2U, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P, 8UA",
            position: DN
        },

        Node2: {
            NodeStop: "City College",
            NodeRoutes: "9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },
    },

    "__Lal_Darwaja_X_Roads__": {
        Stop_Name: "Lal Darwaja X Roads",

        Node1: {
            NodeStop: "Aliyabad",
            NodeRoutes: "8A, 8A/70, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P",
            position: UP
        },

        Node2: {
            NodeStop: "Lal Darwaja",
            NodeRoutes: "2U, 8UA",
            position: UP
        },

        Node3: {
            NodeStop: "Poolbagh Kaman",
            NodeRoutes: "8A/75R",
            position: UP
        },

        Node4: {
            NodeStop: "Shah Ali Banda",
            NodeRoutes: "2C, 2U, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P, 8UA",
            position: DN
        },
    },

    "__Poolbagh_Kaman__": {
        Stop_Name: "Poolbagh Kaman",

        Node1: {
            NodeStop: "Rajanna Bhavi",
            NodeRoutes: "8A/75R",
            position: UP
        },

        Node2: {
            NodeStop: "Lal Darwaja X Roads",
            NodeRoutes: "8A/75R",
            position: DN
        }
    },

    "__Rajanna_Bhavi__": {
        Stop_Name: "Rajanna Bhavi",

        Node1: {
            NodeStop: "Poolbagh Kaman",
            NodeRoutes: "8A/75R",
            position: DN
        }
    },

    "__Lal_Darwaja__": {
        Stop_Name: "Lal Darwaja",

        Node1: {
            NodeStop: "Chatrinaka",
            NodeRoutes: "2U, 8UA",
            position: UP
        },

        Node2: {
            NodeStop: "Lal Darwaja X Roads",
            NodeRoutes: "2U, 8UA",
            position: DN
        }
    },

    "__Chatrinaka__": {
        Stop_Name: "Chatrinaka",

        Node1: {
            NodeStop: "Uppuguda",
            NodeRoutes: "2U, 8UA",
            position: UP
        },

        Node2: {
            NodeStop: "Lal Darwaja",
            NodeRoutes: "2U, 8UA",
            position: DN
        }
    },

    "__Uppuguda__": {
        Stop_Name: "Uppuguda",

        Node1: {
            NodeStop: "Chatrinaka",
            NodeRoutes: "2U, 8UA",
            position: DN
        }
    },

    "__Aliyabad__": {
        Stop_Name: "Aliyabad",

        Node1: {
            NodeStop: "Engine Bowli",
            NodeRoutes: "2C, 8A, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P",
            position: UP
        },

        Node2: {
            NodeStop: "Boystown",
            NodeRoutes: "8A/70",
            position: UP
        },

        Node3: {
            NodeStop: "Lal Darwaja X Roads",
            NodeRoutes: "8A/70",
            position: DN
        }
    },

    "Boystown": {
        Stop_Name: "Boystown",

        Node1: {
            NodeStop: "Theegalakunta",
            NodeRoutes: "8A/70",
            position: UP
        },

        Node2: {
            NodeStop: "Aliyabad",
            NodeRoutes: "8A/70",
            position: DN
        }
    },

    "Theegalakunta": {
        Stop_Name: "Theegalakunta",

        Node1: {
            NodeStop: "Boystown",
            NodeRoutes: "8A/70",
            position: DN
        }
    },

    "__Engine_Bowli__": {
        Stop_Name: "Engine Bowli",

        Node1: {
            NodeStop: "Falaknuma",
            NodeRoutes: "2C, 8A, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P",
            position: UP
        },

        Node2: {
            NodeStop: "Lal Darwaja X Roads",
            NodeRoutes: "2C, 8A, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P",
            position: DN
        }
    },

    "__Falaknuma__": {
        Stop_Name: "Falaknuma",

        Node1: {
            NodeStop: CDRYGT,
            NodeRoutes: "2C, 8A, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P",
            position: UP
        },

        Node2: {
            NodeStop: "Engine Bowli",
            NodeRoutes: "2C, 8A, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P",
            position: DN
        }
    },

    "__Chandrayangutta_X_Roads__": {
        Stop_Name: CDRYGT,

        Node1: {
            NodeStop: "Keshavagiri Post Office",
            NodeRoutes: "2C, 8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Bandlaguda (CDRYGT)",
            NodeRoutes: "8A/178G",
            position: UP
        },

        Node3: {
            NodeStop: "Falaknuma",
            NodeRoutes: "2C, 8A, 8A/85, 8A/178G, 8A/251, 8A/253, 8A/253M, 8AK, 8C, 8C/85P",
            position: DN
        }
    },

    "__Bandlaguda_(CDRYGT)__": {
        Stop_Name: "Bandlaguda (CDRYGT)",

        Node1: {
            NodeStop: "Ismail Nagar",
            NodeRoutes: "8A/178G",
            position: UP
        },

        Node2: {
            NodeStop: CDRYGT,
            NodeRoutes: "8A/178G",
            position: DN
        },
    },

    "__Ismail_Nagar__": {
        Stop_Name: "Ismail Nagar",

        Node1: {
            NodeStop: "Gouse Nagar",
            NodeRoutes: "8A/178G",
            position: UP
        },

        Node2: {
            NodeStop: "Bandlaguda (CDRYGT)",
            NodeRoutes: "8A/178G",
            position: DN
        },
    },

    "__Gouse_Nagar__": {
        Stop_Name: "Gouse Nagar",

        Node1: {
            NodeStop: "Ismail Nagar",
            NodeRoutes: "8A/178G",
            position: DN
        },
    },

    "__Keshavagiri_Post_Office__": {
        Stop_Name: "Keshavagiri Post Office",

        Node1: {
            NodeStop: "CRPF Gate (BRKS)",
            NodeRoutes: "2C, 8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Chandrayangutta X Roads",
            NodeRoutes: "2C, 8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: DN
        },
    },

    "__CRPF_Gate_(BRKS)__": {
        Stop_Name: "CRPF Gate (BRKS)",

        Node1: {
            NodeStop: "Barkas X Roads",
            NodeRoutes: "2C, 8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Keshavagiri Post Office",
            NodeRoutes: "2C, 8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: DN
        },
    },

    "__Barkas_X_Roads__": {
        Stop_Name: "Barkas X Roads",

        Node1: {
            NodeStop: "Barkas",
            NodeRoutes: "2C",
            position: UP
        },

        Node2: {
            NodeStop: "Yerrakunta X Roads",
            NodeRoutes: "8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: UP
        },

        Node3: {
            NodeStop: "CRPF Gate (BRKS)",
            NodeRoutes: "2C, 8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: DN
        }
    },

    "__Barkas__": {
        Stop_Name: "Barkas",

        Node1: {
            NodeStop: "Barkas X Roads",
            NodeRoutes: "2C",
            position: DN
        }
    },

    "__Yerrakunta_X_Roads__": {
        Stop_Name: "Yerrakunta X Roads",

        Node1: {
            NodeStop: "Sadath Nagar",
            NodeRoutes: "8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Barkas X Roads",
            NodeRoutes: "8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: DN
        }
    },

    "__Sadath_Nagar__": {
        Stop_Name: "Sadath Nagar",

        Node1: {
            NodeStop: "Shaheen Nagar",
            NodeRoutes: "8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Yerrakunta X Roads",
            NodeRoutes: "8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: DN
        }
    },

    "__Shaheen_Nagar__": {
        Stop_Name: "Shaheen Nagar",

        Node1: {
            NodeStop: "JGR Garden",
            NodeRoutes: "8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Sadath Nagar",
            NodeRoutes: "8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: DN
        }
    },

    "__JGR_Garden__": {
        Stop_Name: "JGR Garden",

        Node1: {
            NodeStop: "Jalpally X Roads",
            NodeRoutes: "8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Shaheen Nagar",
            NodeRoutes: "8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: DN
        }
    },

    "__Jalpally_X_Roads__": {
        Stop_Name: "Jalpally X Roads",

        Node1: {
            NodeStop: "Pahadi Sharif",
            NodeRoutes: "8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "JGR Garden",
            NodeRoutes: "8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: DN
        }
    },

    "__Pahadi_Sharif__": {
        Stop_Name: "Pahadi Sharif",

        Node1: {
            NodeStop: "RCI Gate",
            NodeRoutes: "8A/251, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Omer Colony",
            NodeRoutes: "8A/253",
            position: UP
        },

        Node3: {
            NodeStop: "Jalpally X Roads",
            NodeRoutes: "8A/85, 8C/85P, 8A/251, 8A/253, 8A/253M",
            position: DN
        }
    },

    "__Omer_Colony__": {
        Stop_Name: "Omer Colony",

        Node1: {
            NodeStop: "Mamidipally Village",
            NodeRoutes: "8A/253",
            position: UP
        },

        Node2: {
            NodeStop: "Pahadi Sharif",
            NodeRoutes: "8A/253",
            position: DN
        }
    },

    "__Mamidipally_Village__": {
        Stop_Name: "Mamidipally Village",

        Node1: {
            NodeStop: "Shamshabad",
            NodeRoutes: "8A/253",
            position: UP
        },

        Node2: {
            NodeStop: "Omer Colony",
            NodeRoutes: "8A/253",
            position: DN
        }
    },

    "__RCI_Gate__": {
        Stop_Name: "RCI Gate",

        Node1: {
            NodeStop: "Raviryal X Roads",
            NodeRoutes: "8A/251, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Pahadi Sharif",
            NodeRoutes: "8A/251, 8A/253M",
            position: DN
        }
    },

    "__Raviryal_X_Roads__": {
        Stop_Name: "Raviryal X Roads",

        Node1: {
            NodeStop: "Mamidipally",
            NodeRoutes: "8A/251, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "RCI Gate",
            NodeRoutes: "8A/251, 8A/253M",
            position: DN
        }
    },

    "__Mamidipally__": {
        Stop_Name: "Mamidipally",

        Node1: {
            NodeStop: "Hardware Park",
            NodeRoutes: "8A/251, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Raviryal X Roads",
            NodeRoutes: "8A/251, 8A/253M",
            position: DN
        }
    },

    "__Hardware_Park__": {
        Stop_Name: "Hardware Park",

        Node1: {
            NodeStop: "Airport Boulevard",
            NodeRoutes: "8A/251, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Mamidipally",
            NodeRoutes: "8A/251, 8A/253M",
            position: DN
        }
    },

    "__Airport_Boulevard__": {
        Stop_Name: "Airport Boulevard",

        Node1: {
            NodeStop: "Thukkuguda",
            NodeRoutes: "8A/251, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Hardware Park",
            NodeRoutes: "8A/251, 8A/253M",
            position: DN
        }
    },

    "__Thukkuguda__": {
        Stop_Name: "Thukkuguda",

        Node1: {
            NodeStop: "Imam Guda",
            NodeRoutes: "8A/251, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Airport Boulevard",
            NodeRoutes: "8A/251, 8A/253M",
            position: DN
        }
    },

    "__Imam_Guda__": {
        Stop_Name: "Imam Guda",

        Node1: {
            NodeStop: "Lemoor Road",
            NodeRoutes: "8A/251, 8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Thukkuguda",
            NodeRoutes: "8A/251, 8A/253M",
            position: DN
        }
    },

    "__Lemoor_Road__": {
        Stop_Name: "Lemoor Road",

        Node1: {
            NodeStop: "Maheshwaram Gate",
            NodeRoutes: "8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Thummaloor Road",
            NodeRoutes: "8A/251",
            position: UP
        },

        Node3: {
            NodeStop: "Imam Guda",
            NodeRoutes: "8A/251, 8A/253M",
            position: DN
        }
    },

    "__Thummaloor_Road__": {
        Stop_Name: "Thummaloor Road",

        Node1: {
            NodeStop: "Rachloor Road",
            NodeRoutes: "8A/251",
            position: UP
        },

        Node2: {
            NodeStop: "Lemoor Road",
            NodeRoutes: "8A/251",
            position: DN
        }
    },

    "__Rachloor_Road__": {
        Stop_Name: "Rachloor Road",

        Node1: {
            NodeStop: "Kothur X Roads",
            NodeRoutes: "8A/251",
            position: UP
        },

        Node2: {
            NodeStop: "Thummaloor Road",
            NodeRoutes: "8A/251",
            position: DN
        }
    },

    "__Kothur_X_Roads__": {
        Stop_Name: "Kothur X Roads",

        Node1: {
            NodeStop: "Kothur (Gudur)",
            NodeRoutes: "8A/251",
            position: UP
        },

        Node2: {
            NodeStop: "Rachloor Road",
            NodeRoutes: "8A/251",
            position: DN
        }
    },

    "__Kothur_(Gudur)__": {
        Stop_Name: "Kothur (Gudur)",

        Node1: {
            NodeStop: "Kothur X Roads",
            NodeRoutes: "8A/251",
            position: DN
        }
    },

    "__Maheshwaram_Gate__": {
        Stop_Name: "Maheshwaram Gate",

        Node1: {
            NodeStop: "Sirigiripuram Gate",
            NodeRoutes: "8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Lemoor Road",
            NodeRoutes: "8A/253M",
            position: DN
        }
    },

    "__Sirigiripuram_Gate__": {
        Stop_Name: "Sirigiripuram Gate",

        Node1: {
            NodeStop: "Maheshwaram X Roads",
            NodeRoutes: "8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Maheshwaram Gate",
            NodeRoutes: "8A/253M",
            position: DN
        }
    },

    "__Maheshwaram_X_Roads__": {
        Stop_Name: "Maheshwaram X Roads",

        Node1: {
            NodeStop: "Maheshwaram",
            NodeRoutes: "8A/253M",
            position: UP
        },

        Node2: {
            NodeStop: "Sirigiripuram Gate",
            NodeRoutes: "8A/253M",
            position: DN
        }
    },

    "__Maheshwaram__": {
        Stop_Name: "Maheshwaram",

        Node1: {
            NodeStop: "Maheshwaram X Roads",
            NodeRoutes: "8A/253M",
            position: DN
        }
    },

    "__Madina__": {
        Stop_Name: "Madina",

        Node1: {
            NodeStop: "City College",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

    },

    "__City_College__": {
        Stop_Name: "City College",

        Node1: {
            NodeStop: "Puranapool Outpost",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node2: {
            NodeStop: "Nayapul",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 2C, 2U, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8C, 8C/85P, 8UA",
            position: DN
        },


        Node3: {
            NodeStop: "Nayapul",
            NodeRoutes: "1Z/229, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },
    },

    "__Nayapul__": {
        Stop_Name: "Nayapul",

        Node1: {
            NodeStop: "Afzalgunj",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 2C, 2U, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8C, 8C/85P, 8UA",
            position: DN
        },


        Node2: {
            NodeStop: "Afzalgunj",
            NodeRoutes: "1Z/229, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },
    },

    "__Puranapool_Outpost__": {
        Stop_Name: "Puranapool Outpost",

        Node1: {
            NodeStop: "Puranapool",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },
    },

    "__Puranapool__": {
        Stop_Name: "Puranapool",

        Node1: {
            NodeStop: "Bahudurpura",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node2: {
            NodeStop: "City College",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: DN
        },


        Node3: {
            NodeStop: "City College",
            NodeRoutes: "1Z/229",
            position: UP
        },
    },

    "__Bahudurpura__": {
        Stop_Name: "Bahudurpura",

        Node1: {
            NodeStop: "Zoo Park",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node2: {
            NodeStop: "Puranapool",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: DN
        },


        Node3: {
            NodeStop: "Puranapool",
            NodeRoutes: "1Z/229",
            position: UP
        },
    },

    "__Zoo_Park__": {
        Stop_Name: "Zoo Park",

        Node1: {
            NodeStop: "Thadbun",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node2: {
            NodeStop: "Bahudurpura",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: DN
        },


        Node3: {
            NodeStop: "Bahudurpura",
            NodeRoutes: "1Z/229",
            position: UP
        },
    },

    "__Thadbun__": {
        Stop_Name: "Thadbun",

        Node1: {
            NodeStop: "Danama Jhopdi",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node2: {
            NodeStop: "Zoo Park",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: DN
        },


        Node3: {
            NodeStop: "Zoo Park",
            NodeRoutes: "1Z/229",
            position: UP
        },
    },

    "__Danama_Jhopdi__": {
        Stop_Name: "Danama Jhopdi",

        Node1: {
            NodeStop: "Hasan Nagar",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node2: {
            NodeStop: "Thadbun",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: DN
        },



        Node3: {
            NodeStop: "Thadbun",
            NodeRoutes: "1Z/229",
            position: UP
        },
    },

    "__Hasan_Nagar__": {
        Stop_Name: "Hasan Nagar",

        Node1: {
            NodeStop: "National Police Academy",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node2: {
            NodeStop: "Danama Jhopdi",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: DN
        },


        Node3: {
            NodeStop: "Danama Jhopdi",
            NodeRoutes: "1Z/229",
            position: UP
        },
    },

    "__National_Police_Academy__": {
        Stop_Name: "National Police Academy",

        Node1: {
            NodeStop: "Aramghar",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node2: {
            NodeStop: "Hasan Nagar",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: DN
        },


        Node3: {
            NodeStop: "Hasan Nagar",
            NodeRoutes: "1Z/229",
            position: UP
        },
    },

    "__Aramghar__": {
        Stop_Name: "Aramghar",

        Node1: {
            NodeStop: "Budvel Station",
            NodeRoutes: "1Z/251, 1Z/539, 2Z/251, 3K/251, 3K/252, 3KN/251, 5K/251, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node2: {
            NodeStop: "Babul Reddy Nagar",
            NodeRoutes: "2Z, 92K",
            position: UP
        },

        Node3: {
            NodeStop: "National Police Academy",
            NodeRoutes: "1Z, 1Z/251, 1Z/539, 2Z, 2Z/251, 3K/95, 3K/251, 3K/252, 3KN/95, 3KN/251, 7Z, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: DN
        },

        Node4: {
            NodeStop: "National Police Academy",
            NodeRoutes: "1Z/229",
            position: UP
        },

        Node5: {
            NodeStop: "Shivarampally X Roads",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: DN
        }
    },

    "__Babul_Reddy_Nagar__": {
        Stop_Name: "Babul Reddy Nagar",

        Node1: {
            NodeStop: "Durga Nagar",
            NodeRoutes: "2Z, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "Aramghar",
            NodeRoutes: "2Z, 92K",
            position: DN
        },
    },

    "__Durga_Nagar__": {
        Stop_Name: "Durga Nagar",

        Node1: {
            NodeStop: "Katedan",
            NodeRoutes: "2Z, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "Babul Reddy Nagar",
            NodeRoutes: "2Z, 92K",
            position: DN
        },
    },

    "__Katedan__": {
        Stop_Name: "Katedan",

        Node1: {
            NodeStop: "Kedia Biscuit Factory",
            NodeRoutes: "2Z, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "Durga Nagar",
            NodeRoutes: "2Z, 92K",
            position: DN
        },
    },

    "__Kedia_Biscuit_Factory__": {
        Stop_Name: "Kedia Biscuit Factory",

        Node1: {
            NodeStop: "Madhuban",
            NodeRoutes: "2Z, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "Katedan",
            NodeRoutes: "2Z, 92K",
            position: DN
        },
    },

    "__Madhuban__": {
        Stop_Name: "Madhuban",

        Node1: {
            NodeStop: "Sri Ram Colony",
            NodeRoutes: "2Z, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "Kedia Biscuit Factory",
            NodeRoutes: "2Z, 92K",
            position: DN
        },
    },

    "__Sri_Ram_Colony__": {
        Stop_Name: "Sri Ram Colony",

        Node1: {
            NodeStop: "Madhuban",
            NodeRoutes: "2Z, 92K",
            position: DN
        },
    },

    "__Budvel_Station__": {
        Stop_Name: "Budvel Station",

        Node1: {
            NodeStop: "Gagan Pahad",
            NodeRoutes: "1Z/251, 1Z/539, 2Z/251, 3K/251, 3K/252, 3KN/251, 5K/251, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node2: {
            NodeStop: "Aramghar",
            NodeRoutes: "1Z/251, 1Z/539, 2Z/251, 3K/251, 3K/252, 3KN/251, 5K/251, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: DN
        },
    },

    "__Gagan_Pahad__": {
        Stop_Name: "Gagan Pahad",

        Node1: {
            NodeStop: "Satamrai",
            NodeRoutes: "1Z/251, 1Z/539, 3K/251, 3K/252, 3KN/251, 5K/251, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node2: {
            NodeStop: "Budvel Station",
            NodeRoutes: "1Z/251, 1Z/539, 3K/251, 3K/252, 3KN/251, 5K/251, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: DN
        },
    },

    "__Satamrai__": {
        Stop_Name: "Satamrai",

        Node1: {
            NodeStop: "Shamshabad Village",
            NodeRoutes: "1Z/251, 1Z/539, 3K/251, 3K/252, 3KN/251, 5K/251, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node2: {
            NodeStop: "Gagan Pahad",
            NodeRoutes: "1Z/251, 1Z/539, 3K/251, 3K/252, 3KN/251, 5K/251, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: DN
        },
    },

    "__Shamshabad_Village__": {
        Stop_Name: "Shamshabad Village",

        Node1: {
            NodeStop: "Shamshabad",
            NodeRoutes: "1Z/251, 1Z/539, 3K/251, 3K/252, 3KN/251, 5K/251, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: UP
        },

        Node2: {
            NodeStop: "Satamrai",
            NodeRoutes: "1Z/251, 1Z/539, 3K/251, 3K/252, 3KN/251, 5K/251, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: DN
        }
    },

    "__Shamshabad__": {
        Stop_Name: "Shamshabad",

        Node1: {
            NodeStop: "Kishanguda",
            NodeRoutes: "1Z/539, 8A/252S, 8A/532, 8A/539, 300/539, 539",
            position: UP
        },

        Node2: {
            NodeStop: "Shamshabad Village",
            NodeRoutes: "1Z/251, 1Z/539, 3K/251, 3K/252, 3KN/251, 5K/251, 7Z/251, 8A/252S, 8A/532, 8A/539",
            position: DN
        },

        Node3: {
            NodeStop: "RGI Airport",
            NodeRoutes: "3K/252",
            position: UP
        },


        Node4: {
            NodeStop: "Mamidipally Village",
            NodeRoutes: "8A/253",
            position: DN
        },
    },

    "__RGI_Airport__": {
        Stop_Name: "RGI Airport",

        Node1: {
            NodeStop: "Shamshabad",
            NodeRoutes: "3K/252",
            position: DN
        }
    },

    "__Kishanguda__": {
        Stop_Name: "Kishanguda",

        Node1: {
            NodeStop: "Gandiguda",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: UP
        },

        Node2: {
            NodeStop: "Rasheedguda",
            NodeRoutes: "252S, 8A/252S",
            position: UP
        },

        Node3: {
            NodeStop: "Shamshabad",
            NodeRoutes: "1Z/539, 8A/252S, 8A/532, 8A/539, 252S, 300/539, 539",
            position: DN
        }
    },

    "__Rasheedguda__": {
        Stop_Name: "Rasheedguda",

        Node1: {
            NodeStop: "Chinna Golconda",
            NodeRoutes: "252S, 8A/252S",
            position: UP
        },

        Node2: {
            NodeStop: "Kishanguda",
            NodeRoutes: "252S, 8A/252S",
            position: DN
        },
    },

    "__Chinna_Golconda__": {
        Stop_Name: "Chinna Golconda",

        Node1: {
            NodeStop: "Sanghiguda X Roads",
            NodeRoutes: "252S, 8A/252S",
            position: UP
        },

        Node2: {
            NodeStop: "Rasheedguda",
            NodeRoutes: "252S, 8A/252S",
            position: DN
        },
    },

    "__Sanghiguda_X_Roads__": {
        Stop_Name: "Sanghiguda X Roads",

        Node1: {
            NodeStop: "Shankarapuram",
            NodeRoutes: "252S, 8A/252S",
            position: UP
        },

        Node2: {
            NodeStop: "Chinna Golconda",
            NodeRoutes: "252S, 8A/252S",
            position: DN
        },
    },

    "__Shankarapuram__": {
        Stop_Name: "Shankarapuram",

        Node1: {
            NodeStop: "Sanghiguda X Roads",
            NodeRoutes: "252S, 8A/252S",
            position: DN
        },
    },

    "__Gandiguda__": {
        Stop_Name: "Gandiguda",

        Node1: {
            NodeStop: "Ghasmiyaguda",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: UP
        },

        Node2: {
            NodeStop: "Kishanguda",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: DN
        },
    },

    "__Ghasmiyaguda__": {
        Stop_Name: "Ghasmiyaguda",

        Node1: {
            NodeStop: "Pedda Shapoor",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: UP
        },

        Node2: {
            NodeStop: "Gandiguda",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: DN
        },
    },

    "__Pedda_Shapoor__": {
        Stop_Name: "Pedda Shapoor",

        Node1: {
            NodeStop: "Madanapally",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: UP
        },

        Node2: {
            NodeStop: "Ghasmiyaguda",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: DN
        },
    },

    "__Madanapally__": {
        Stop_Name: "Madanapally",

        Node1: {
            NodeStop: "Palmakula",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: UP
        },

        Node2: {
            NodeStop: "Pedda Shapoor",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: DN
        },
    },

    "__Palmakula__": {
        Stop_Name: "Palmakula",

        Node1: {
            NodeStop: "Timmapur",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: UP
        },

        Node2: {
            NodeStop: "Madanapally",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: DN
        },
    },

    "__Timmapur__": {
        Stop_Name: "Timmapur",

        Node1: {
            NodeStop: "Kothur (Shadnagar)",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: UP
        },

        Node2: {
            NodeStop: "Palmakula",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: DN
        },
    },

    "__Kothur_(Shadnagar)__": {
        Stop_Name: "Kothur (Shadnagar)",

        Node1: {
            NodeStop: "Nandigama",
            NodeRoutes: "1Z/539, 8A/539, 300/539, 539",
            position: UP
        },

        Node2: {
            NodeStop: "Timmapur",
            NodeRoutes: "1Z/539, 8A/532, 8A/539, 300/539, 539",
            position: DN
        },
    },

    "__Nandigama__": {
        Stop_Name: "Nandigama",

        Node1: {
            NodeStop: "Antareddyguda",
            NodeRoutes: "1Z/539, 8A/539, 300/539, 539",
            position: UP
        },

        Node2: {
            NodeStop: "Kothur (Shadnagar)",
            NodeRoutes: "1Z/539, 8A/539, 300/539, 539",
            position: DN
        },
    },

    "__Antareddyguda__": {
        Stop_Name: "Antareddyguda",

        Node1: {
            NodeStop: "Narsappaguda",
            NodeRoutes: "1Z/539, 8A/539, 300/539, 539",
            position: UP
        },

        Node2: {
            NodeStop: "Nandigama",
            NodeRoutes: "1Z/539, 8A/539, 300/539, 539",
            position: DN
        },
    },

    "__Narsappaguda__": {
        Stop_Name: "Narsappaguda",

        Node1: {
            NodeStop: "Chegur",
            NodeRoutes: "1Z/539, 8A/539, 300/539, 539",
            position: UP
        },

        Node2: {
            NodeStop: "Antareddyguda",
            NodeRoutes: "1Z/539, 8A/539, 300/539, 539",
            position: DN
        },
    },

    "__Chegur__": {
        Stop_Name: "Chegur",

        Node1: {
            NodeStop: "Kanha",
            NodeRoutes: "1Z/539, 8A/539, 300/539, 539",
            position: UP
        },

        Node2: {
            NodeStop: "Narsappaguda",
            NodeRoutes: "1Z/539, 8A/539, 300/539, 539",
            position: DN
        },
    },

    "__Kanha__": {
        Stop_Name: "Kanha",

        Node1: {
            NodeStop: "Chegur",
            NodeRoutes: "1Z/539, 8A/539, 300/539, 539",
            position: DN
        }
    },

    "__Osmania_Hospital__": {
        Stop_Name: "Osmania Hospital",

        Node1: {
            NodeStop: "Begum Bazar",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: UP
        }
    },

    "__Begum_Bazar__": {
        Stop_Name: "Begum Bazar",

        Node1: {
            NodeStop: "Jumerath Bazar",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: UP
        },

        Node2: {
            NodeStop: "Afzalgunj",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: DN
        }
    },

    "__Jumerath_Bazar__": {
        Stop_Name: "Jumerath Bazar",

        Node1: {
            NodeStop: "Puranapool Circle",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: UP
        },

        Node2: {
            NodeStop: "Begum Bazar",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: DN
        }
    },

    "__Puranapool_Circle__": {
        Stop_Name: "Puranapool Circle",

        Node1: {
            NodeStop: "Durga Nagar (Musi)",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: UP
        },

        Node2: {
            NodeStop: "Jumerath Bazar",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: DN
        }
    },

    "__Durga_Nagar_(Musi)__": {
        Stop_Name: "Durga Nagar (Musi)",

        Node1: {
            NodeStop: "New Ganga Nagar",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: UP
        },

        Node2: {
            NodeStop: "Puranapool Circle",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: DN
        }
    },

    "__New_Ganga_Nagar__": {
        Stop_Name: "New Ganga Nagar",

        Node1: {
            NodeStop: "Jiyaguda",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: UP
        },

        Node2: {
            NodeStop: "Durga Nagar (Musi)",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: DN
        }
    },

    "__Jiyaguda__": {
        Stop_Name: "Jiyaguda",

        Node1: {
            NodeStop: "Jiyaguda KHT",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: UP
        },

        Node2: {
            NodeStop: "New Ganga Nagar",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: DN
        }
    },

    "__Jiyaguda_KHT__": {
        Stop_Name: "Jiyaguda KHT",

        Node1: {
            NodeStop: "Toli Masjid",
            NodeRoutes: "1JL, 1JK",
            position: UP
        },

        Node2: {
            NodeStop: "Jiyaguda",
            NodeRoutes: "1J, 1JL, 1JK, 2J, 3KJ",
            position: DN
        }
    },

    "__Toli_Masjid__": {
        Stop_Name: "Toli Masjid",

        Node1: {
            NodeStop: "Attapur Ring Road",
            NodeRoutes: "1JL, 1JK",
            position: UP
        },

        Node2: {
            NodeStop: "Jiyaguda KHT",
            NodeRoutes: "1JL, 1JK",
            position: DN
        }
    },

    "__Attapur_Ring_Road__": {
        Stop_Name: "Attapur Ring Road",

        Node1: {
            NodeStop: "Langer House X Roads",
            NodeRoutes: "1JL, 1JK",
            position: UP
        },

        Node2: {
            NodeStop: "Toli Masjid",
            NodeRoutes: "1JL, 1JK",
            position: DN
        },

        Node3: {
            NodeStop: "Attapur",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: UP
        },

        Node4: {
            NodeStop: "Jyothi Nagar (MP)",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: DN
        }
    },

    "__Langer_House_X_Roads__": {
        Stop_Name: "Langer House X Roads",

        Node1: {
            NodeStop: "Langer House",
            NodeRoutes: "1JL, 1JK",
            position: UP
        },

        Node2: {
            NodeStop: "Attapur Ring Road",
            NodeRoutes: "1JL, 1JK",
            position: DN
        }
    },

    "__Langer_House__": {
        Stop_Name: "Langer House",

        Node1: {
            NodeStop: "Bapu Ghat",
            NodeRoutes: "1JK, 5G, 5K/120K, 5K/188, 6RK",
            position: UP
        },

        Node2: {
            NodeStop: "Langer House X Roads",
            NodeRoutes: "1JL, 1JK",
            position: DN
        },

        Node3: {
            NodeStop: "Nanal Nagar",
            NodeRoutes: "5G, 5K/120K, 5K/188, 6RK",
            position: DN
        }
    },

    "__Bapu_Ghat__": {
        Stop_Name: "Bapu Ghat",

        Node1: {
            NodeStop: "TK Bridge",
            NodeRoutes: "1JK, 5K/188, 6RK",
            position: UP
        },

        Node2: {
            NodeStop: "Langer House",
            NodeRoutes: "1JK, 5K/188, 6RK",
            position: DN
        },

        Node3: {
            NodeStop: "Ramdev Guda",
            NodeRoutes: "1JK, 5G, 5K/120K, 6RK",
            position: UP
        },
    },

    "__Ramdev_Guda__": {
        Stop_Name: "Ramdev Guda",

        Node1: {
            NodeStop: "Makki Darwaja",
            NodeRoutes: "5G",
            position: UP
        },

        Node2: {
            NodeStop: "Ibrahim Bagh",
            NodeRoutes: "5K/120K, 505",
            position: UP
        },

        Node3: {
            NodeStop: "Langer House",
            NodeRoutes: "5G, 5K/120K, 505",
            position: DN
        }
    },

    "__Ibrahim_Bagh__": {
        Stop_Name: "Ibrahim Bagh",

        Node1: {
            NodeStop: "Neknapur",
            NodeRoutes: "5K/120K, 505",
            position: UP
        },

        Node2: {
            NodeStop: "Ramdev Guda",
            NodeRoutes: "5K/120K, 505",
            position: DN
        }
    },

    "__Neknapur__": {
        Stop_Name: "Neknapur",

        Node1: {
            NodeStop: "Manchirevula X Roads",
            NodeRoutes: "5K/120K, 505",
            position: UP
        },

        Node2: {
            NodeStop: "Ibrahim Bagh",
            NodeRoutes: "5K/120K, 505",
            position: DN
        }
    },

    "__Manchirevula_X_Roads__": {
        Stop_Name: "Manchirevula X Roads",

        Node1: {
            NodeStop: "Kokapet X Roads",
            NodeRoutes: "5K/120K, 505",
            position: UP
        },

        Node2: {
            NodeStop: "Neknapur",
            NodeRoutes: "5K/120K, 505",
            position: DN
        }
    },

    "__Kokapet_X_Roads__": {
        Stop_Name: "Kokapet X Roads",

        Node1: {
            NodeStop: "Kokapet",
            NodeRoutes: "5K/120K",
            position: UP
        },

        Node2: {
            NodeStop: "Gandipet X Road",
            NodeRoutes: "505",
            position: UP
        },

        Node3: {
            NodeStop: "Manchirevula X Roads",
            NodeRoutes: "5K/120K, 505",
            position: DN
        }
    },

    "__Kokapet__": {
        Stop_Name: "Kokapet",

        Node1: {
            NodeStop: "Kokapet X Roads",
            NodeRoutes: "5K/120K",
            position: DN
        }
    },

    "__Makki_Darwaja__": {
        Stop_Name: "Makki Darwaja",

        Node1: {
            NodeStop: "Golconda",
            NodeRoutes: "5G",
            position: UP
        },

        Node2: {
            NodeStop: "Ramdev Guda",
            NodeRoutes: "5G",
            position: DN
        }
    },

    "__Golconda__": {
        Stop_Name: "Golconda",

        Node1: {
            NodeStop: "Makki Darwaja",
            NodeRoutes: "5G",
            position: DN
        }
    },

    "__TK_Bridge__": {
        Stop_Name: "TK Bridge",

        Node1: {
            NodeStop: "Sun City",
            NodeRoutes: "1JK, 5K/188, 6RK",
            position: UP
        },

        Node2: {
            NodeStop: "Langer House",
            NodeRoutes: "1JK, 5K/188, 6RK",
            position: DN
        }
    },

    "__Sun_City__": {
        Stop_Name: "Sun City",

        Node1: {
            NodeStop: "Bandlaguda (LGRHS)",
            NodeRoutes: "1JK, 5K/188, 6RK",
            position: UP
        },

        Node2: {
            NodeStop: "TK Bridge",
            NodeRoutes: "1JK, 5K/188, 6RK",
            position: DN
        }
    },

    "__Bandlaguda_(LGRHS)__": {
        Stop_Name: "Bandlaguda (LGRHS)",

        Node1: {
            NodeStop: "Peerancheru",
            NodeRoutes: "1JK, 5K/188, 6RK",
            position: UP
        },

        Node2: {
            NodeStop: "Sun City",
            NodeRoutes: "1JK, 5K/188, 6RK",
            position: DN
        }
    },

    "__Peerancheru__": {
        Stop_Name: "Peerancheru",

        Node1: {
            NodeStop: "Kali Mandir",
            NodeRoutes: "1JK, 5K/188, 6RK",
            position: UP
        },

        Node2: {
            NodeStop: "Bandlaguda (LGRHS)",
            NodeRoutes: "1JK, 5K/188, 6RK",
            position: DN
        }
    },

    "__Kali Mandir__": {
        Stop_Name: "Kali Mandir",

        Node1: {
            NodeStop: "",
            NodeRoutes: "",
            position: UP
        },

        Node2: {
            NodeStop: "Peerancheru",
            NodeRoutes: "1JK, 5K/188, 6RK",
            position: DN
        }
    },

    "__Padmarao_Nagar__": {
        Stop_Name: "Padmarao Nagar",

        Node1: {
            NodeStop: "Gandhi Hospital Backside",
            NodeRoutes: "1P",
            position: UP
        },

        Node2: {
            NodeStop: "Chilkalguda X Roads",
            NodeRoutes: "1P",
            position: DN
        },


        Node3: {
            NodeStop: "Chilkalguda X Roads",
            NodeRoutes: "1P/25S",
            position: UP
        },
    },

    "__Gandhi_Hospital_Backside__": {
        Stop_Name: "Gandhi Hospital Backside",

        Node1: {
            NodeStop: "Musheerabad",
            NodeRoutes: "1P",
            position: UP
        },

        Node2: {
            NodeStop: "Padmarao Nagar",
            NodeRoutes: "1P",
            position: DN
        },


        Node3: {
            NodeStop: "Padmarao Nagar",
            NodeRoutes: "1P/25S",
            position: UP
        },
    },

    "__Bus_Bhavan__": {
        Stop_Name: "Bus Bhavan",

        Node1: {
            NodeStop: "VST",
            NodeRoutes: "1B, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: UP
        },

        Node2: {
            NodeStop: "RTC X Roads",
            NodeRoutes: "1B, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: DN
        },

        Node3: {
            NodeStop: "RTC X Roads",
            NodeRoutes: "2/25S, 6IW/252, 6X",
            position: UP
        },

        Node4: {
            NodeStop: "VST",
            NodeRoutes: "6IW/252, 6X",
            position: DN
        },
    },

    "__VST__": {
        Stop_Name: "VST",

        Node1: {
            NodeStop: "Nallakunta",
            NodeRoutes: "2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: UP
        },

        Node2: {
            NodeStop: "Ambedkar Degree College",
            NodeRoutes: "1B, 6R, 6RK",
            position: UP
        },

        Node3: {
            NodeStop: "Bus Bhavan",
            NodeRoutes: "1B, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: DN
        },

        Node4: {
            NodeStop: "Bus Bhavan",
            NodeRoutes: "2/25S, 6IW/252, 6X",
            position: UP
        },

        Node5: {
            NodeStop: "Vidya Nagar",
            NodeRoutes: "6R, 6RK, 6IW/252, 6X",
            position: DN
        },
    },

    "__Nallakunta__": {
        Stop_Name: "Nallakunta",

        Node1: {
            NodeStop: "Fiver Hospital",
            NodeRoutes: "2, 2C, 2J, 2K, 2U, 2Z, 2Z/251, 3K/6M, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6H, 6N/47W, 6NW",
            position: UP
        },

        Node2: {
            NodeStop: "Fiver Hospital",
            NodeRoutes: "3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: DN
        },
    },

    "__Shankarmutt__": {
        Stop_Name: "Shankarmutt",

        Node1: {
            NodeStop: "VST",
            NodeRoutes: "2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: DN
        },

        Node2: {
            NodeStop: "VST",
            NodeRoutes: "2/25S",
            position: UP
        },

        Node3: {
            NodeStop: "Vidya Nagar",
            NodeRoutes: "3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node2: {
            NodeStop: "Vidya Nagar",
            NodeRoutes: "3K/6M, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6H, 6N/47W, 6NW",
            position: DN
        },
    },

    "__Fiver_Hospital__": {
        Stop_Name: "Fiver Hospital",

        Node1: {
            NodeStop: KCGT,
            NodeRoutes: "2, 2C, 2J, 2K, 2U, 2Z, 2Z/251, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Shankarmutt",
            NodeRoutes: "2, 2C, 2J, 2K, 2U, 2Z, 2Z/251, 3K/6M, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6H, 6NW, 6N/47W",
            position: DN
        },

        Node3: {
            NodeStop: "Shankarmutt",
            NodeRoutes: "2/25S, 3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node4: {
            NodeStop: KCGT,
            NodeRoutes: "3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3T, 3Y",
            position: DN
        },

        Node5: {
            NodeStop: "YMCA",
            NodeRoutes: "3N",
            position: DN
        },

        Node6: {
            NodeStop: "Barkatpura",
            NodeRoutes: "3K/6M, 3KN/6M, 6H, 6N/47W, 6NW",
            position: UP
        },

        Node7: {
            NodeStop: "Barkatpura",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

    },

    "__Barkatpura__": {
        Stop_Name: "Barkatpura",

        Node1: {
            NodeStop: "Fiver Hospital",
            NodeRoutes: "2, 2C, 2J, 2K, 2U, 2Z, 2Z/251, 3K/6M, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6H, 6NW, 6N/47W",
            position: DN
        },

        Node2: {
            NodeStop: "Fiver Hospital",
            NodeRoutes: "2/25S, 3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node3: {
            NodeStop: "Narayanaguda",
            NodeRoutes: "3K/6M, 3KN/6M, 6H, 6N/47W, 6NW",
            position: UP
        },

        Node4: {
            NodeStop: "Narayanaguda",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: DN
        },
    },

    "__Himayath_Nagar__": {
        Stop_Name: "Himayath Nagar",

        Node1: {
            NodeStop: "Liberty",
            NodeRoutes: "3K/6M, 3KN/6M, 6H, 6N/47W, 6NW, 6R, 6RK",
            position: UP
        },

        Node2: {
            NodeStop: "Narayanaguda",
            NodeRoutes: "3K/6M, 3KN/6M, 6H, 6N/47W, 6NW, 6R, 6RK",
            position: DN
        },

        Node3: {
            NodeStop: "Liberty",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node4: {
            NodeStop: "Narayanaguda",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: UP
        },
    },

    "__Liberty__": {
        Stop_Name: "Liberty",

        Node1: {
            NodeStop: "Secretariate",
            NodeRoutes: "3K/6M, 3KN/6M, 6H, 6N/47W, 6NW, 6R, 6RK",
            position: UP
        },

        Node2: {
            NodeStop: "Himayath Nagar",
            NodeRoutes: "3K/6M, 3KN/6M, 6H, 6N/47W, 6NW, 6R, 6RK",
            position: DN
        },

        Node3: {
            NodeStop: "Secretariate",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node4: {
            NodeStop: "Himayath Nagar",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node5: {
            NodeStop: "Nizam College",
            NodeRoutes: "7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8M, 8R, 8UA",
            position: UP
        },

        Node6: {
            NodeStop: "Tank Bund",
            NodeRoutes: "7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8UA",
            position: DN
        }
    },


    "__Nizam_College__": {
        Stop_Name: "Nizam College",

        Node1: {
            NodeStop: "Abids",
            NodeRoutes: "7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8UA",
            position: UP
        },

        Node2: {
            NodeStop: "Liberty",
            NodeRoutes: "7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8UA",
            position: DN
        }
    },

    "__Abids__": {
        Stop_Name: "Abids",

        Node1: {
            NodeStop: "Bank Street (Koti)",
            NodeRoutes: "7Z, 7Z/251, 9K/102",
            position: UP
        },

        Node2: {
            NodeStop: "Abids GPO",
            NodeRoutes: "8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8UA",
            position: UP
        },

        Node3: {
            NodeStop: "Bank Street (Koti)",
            NodeRoutes: "9K, 9K/230P, 9K/272G",
            position: DN
        },
    },

    "__Abids_GPO__": {
        Stop_Name: "Abids GPO",

        Node1: {
            NodeStop: "Nampally",
            NodeRoutes: "7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8UA, 9K/102",
            position: DN
        },

        Node2: {
            NodeStop: "Osmangunj",
            NodeRoutes: "8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8C, 8C/85P, 8UA",
            position: UP
        },

        Node3: {
            NodeStop: "Nampally",
            NodeRoutes: "9K, 9K/230P, 9K/272G",
            position: UP
        }
    },

    "__Osmangunj__": {
        Stop_Name: "Osmangunj",
        Node1: {
            NodeStop: "Afzalgunj",
            NodeRoutes: "8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8C, 8C/85P, 8M, 8R, 8UA, 16A/20",
            position: UP
        },

        Node2: {
            NodeStop: "Gandhi Bhavan",
            NodeRoutes: "8C, 8C/85P, 8M, 8R, 16A/20",
            position: DN
        },

        Node3: {
            NodeStop: "Abids GPO",
            NodeRoutes: "8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8UA",
            position: DN
        },

        Node4: {
            NodeStop: "Gandhi Bhavan",
            NodeRoutes: "8C/229, 9A, 9F, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },

        Node5: {
            NodeStop: "Afzalgunj",
            NodeRoutes: "9A, 9F, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },
    },

    "__Gandhi_Bhavan__": {
        Stop_Name: "Gandhi Bhavan",

        Node1: {
            NodeStop: "Osmangunj",
            NodeRoutes: "8C, 8C/85P, 8M, 8R, 16A/20",
            position: UP
        },

        Node2: {
            NodeStop: "Nampally",
            NodeRoutes: "8C, 8C/85P, 8M, 8R, 16A/20",
            position: DN
        },

        Node3: {
            NodeStop: "Nampally",
            NodeRoutes: "8/37, 8C/229, 9A, 9F, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },

        Node4: {
            NodeStop: "Osmangunj",
            NodeRoutes: "9A, 9F, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },
    },

    "__Nampally__": {
        Stop_Name: "Nampally",

        Node1: {
            NodeStop: "Public Gardens",
            NodeRoutes: "7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8C, 8C/85P, 8M, 8R, 8UA, 9K/102, 16A/20",
            position: DN
        },

        Node2: {
            NodeStop: "Gandhi Bhavan",
            NodeRoutes: "8C, 8C/85P, 8M, 8R, 16A/20",
            position: UP
        },

        Node3: {
            NodeStop: "Public Gardens",
            NodeRoutes: "8/37, 8C/229, 9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },

        Node4: {
            NodeStop: "Gandhi Bhavan",
            NodeRoutes: "9A, 9F, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },
    },

    "__Bank_Street_(Koti)__": {
        Stop_Name: "Bank Street (Koti)",

        Node1: {
            NodeStop: KOTI_M,
            NodeRoutes: "7Z, 7Z/251",
            position: UP
        },

        Node2: {
            NodeStop: KOTI_M,
            NodeRoutes: "9K, 9K/230P, 9K/272G",
            position: DN
        },

        Node3: {
            NodeStop: KOTI_B,
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Secretariate__": {
        Stop_Name: "Secretariate",

        Node1: {
            NodeStop: "Birla Mandir",
            NodeRoutes: "3K/6M, 3KN/6M, 5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 6H, 6N/47W, 6NW, 6R, 6RK, 6IW/252, 6X, 8C, 8C/85P, 8M, 8R, 15D/20, 16/20, 16A/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: UP
        },

        Node2: {
            NodeStop: "Liberty",
            NodeRoutes: "3K/6M, 3KN/6M, 6H, 6N/47W, 6NW, 6R, 6RK",
            position: DN
        },

        Node3: {
            NodeStop: "Birla Mandir",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node4: {
            NodeStop: "Liberty",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node5: {
            NodeStop: "Tank Bund",
            NodeRoutes: "5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 8C, 8C/85P, 8M, 8R, 15H/20, 15D/20, 16/20, 16A/20, 16R/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: DN
        },

        Node6: {
            NodeStop: "Tank Bund",
            NodeRoutes: "5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229, 5R, 8/37, 8C/229",
            position: UP
        },
    },

    "__Birla_Mandir__": {
        Stop_Name: "Birla Mandir",

        Node1: {
            NodeStop: "Lakdi Ka Pul",
            NodeRoutes: "3K/6M, 3KN/6M, 5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 6H, 6N/47W, 6NW, 6R, 6RK, 6IW/252, 6X, 15D/20, 16/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: UP
        },

        Node2: {
            NodeStop: "Lakdi Ka Pul",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Assembly",
            NodeRoutes: "8C, 8C/85P, 8M, 8R, 16A/20",
            position: UP
        },

        Node4: {
            NodeStop: "Secretariate",
            NodeRoutes: "8C, 8C/85P, 8M, 8R, 16A/20",
            position: DN
        },

        Node5: {
            NodeStop: "Secretariate",
            NodeRoutes: "8/37, 8C/229",
            position: UP
        },
    },

    "__Assembly__": {
        Stop_Name: "Assembly",

        Node1: {
            NodeStop: "Public Gardens",
            NodeRoutes: "8C, 8C/85P, 8M, 8R, 16A/20",
            position: UP
        },

        Node2: {
            NodeStop: "Birla Mandir",
            NodeRoutes: "8C, 8C/85P, 8M, 8R, 16A/20",
            position: DN
        },

        Node3: {
            NodeStop: "Birla Mandir",
            NodeRoutes: "8/37, 8C/229",
            position: UP
        },

        Node4: {
            NodeStop: "Lakdi Ka Pul",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },

        Node5: {
            NodeStop: "Abids",
            NodeRoutes: "9K, 9K/230P, 9K/272G",
            position: DN
        },

        Node6: {
            NodeStop: "Public Gardens",
            NodeRoutes: "9A, 9F, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },

        Node7: {
            NodeStop: "Lakdi Ka Pul",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node8: {
            NodeStop: "Abids",
            NodeRoutes: "9K/102",
            position: UP
        },

    },

    "__Public_Gardens__": {
        Stop_Name: "Public Gardens",

        Node1: {
            NodeStop: "Nampally",
            NodeRoutes: "8C, 8C/85P, 8M, 8R, 16A/20",
            position: UP
        },

        Node2: {
            NodeStop: "Assembly",
            NodeRoutes: "8C, 8C/85P, 8M, 8R, 9K/102, 16A/20",
            position: DN
        },

        Node3: {
            NodeStop: "Nizam College",
            NodeRoutes: "7Z, 7Z/251, 8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8UA",
            position: DN
        },

        Node4: {
            NodeStop: "Assembly",
            NodeRoutes: "8/37, 8C/229, 9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },

        Node5: {
            NodeStop: "Nampally",
            NodeRoutes: "9A, 9F, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },
    },

    "__Lakdi_Ka_Pul__": {
        Stop_Name: "Lakdi Ka Pul",

        Node1: {
            NodeStop: "Mahavir Hospital",
            NodeRoutes: "3K/6M, 3KN/6M, 5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 6H, 6N/47W, 6NW, 6R, 6RK, 6IW/252, 15D/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: UP
        },

        Node2: {
            NodeStop: "Telephone Bhavan",
            NodeRoutes: "3K/6M, 3KN/6M, 5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 6H, 6N/47W, 6NW, 6R, 6RK, 6IW/252, 6X, 15D/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K, 16/20, 16ES",
            position: DN
        },

        Node3: {
            NodeStop: "Mahavir Hospital",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node4: {
            NodeStop: "Telephone Bhavan",
            NodeRoutes: "5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229, 5R, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node5: {
            NodeStop: "Lakdikapul (BJR CLG)",
            NodeRoutes: "6X, 16/20",
            position: UP
        },

        Node6: {
            NodeStop: "Shadan College",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },

        Node7: {
            NodeStop: "Assembly",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },

        Node8: {
            NodeStop: "Shadan College",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node9: {
            NodeStop: "Assembly",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Mahavir_Hospital__": {
        Stop_Name: "Mahavir Hospital",

        Node1: {
            NodeStop: "NMDC",
            NodeRoutes: "3K/6M, 3KN/6M, 5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5W, 6H, 6N/47W, 6NW, 6R, 6RK, 6IW/252, 15D/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: UP
        },

        Node2: {
            NodeStop: "Lakdikapul (BJR CLG)",
            NodeRoutes: "3K/6M, 3KN/6M, 5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 6H, 6N/47W, 6NW, 6R, 6RK, 6IW/252, 15D/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: DN
        },

        Node3: {
            NodeStop: "NMDC",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node4: {
            NodeStop: "Lakdikapul (BJR CLG)",
            NodeRoutes: "5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229, 5R, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node5: {
            NodeStop: "Vijay Nagar Colony",
            NodeRoutes: "5M",
            position: UP
        },
    },

    "__Vijay_Nagar_Colony__": {
        Stop_Name: "Vijay Nagar Colony",

        Node1: {
            NodeStop: "Mallepally",
            NodeRoutes: "5M",
            position: UP
        },

        Node2: {
            NodeStop: "Mahavir Hospital",
            NodeRoutes: "5M",
            position: DN
        }
    },

    "__Mallepally__": {
        Stop_Name: "Mallepally",

        Node1: {
            NodeStop: "Asif Nagar",
            NodeRoutes: "5M",
            position: UP
        },

        Node2: {
            NodeStop: "Vijay Nagar Colony",
            NodeRoutes: "5M",
            position: DN
        }
    },

    "__Asif_Nagar__": {
        Stop_Name: "Asif Nagar",

        Node1: {
            NodeStop: "Milan Talkies",
            NodeRoutes: "5M",
            position: UP
        },

        Node2: {
            NodeStop: "Mallepally",
            NodeRoutes: "5M",
            position: DN
        }
    },

    "__Milan_Talkies__": {
        Stop_Name: "Milan Talkies",

        Node1: {
            NodeStop: "Mehdipatnam",
            NodeRoutes: "5M",
            position: UP
        },

        Node2: {
            NodeStop: "Asif Nagar",
            NodeRoutes: "5M",
            position: DN
        }
    },

    "__Lakdikapul_(BJR_CLG)__": {
        Stop_Name: "Lakdikapul (BJR CLG)",

        Node1: {
            NodeStop: "Lakdi Ka Pul",
            NodeRoutes: "3K/6M, 3KN/6M, 5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 6H, 6N/47W, 6NW, 6R, 6RK, 6IW/252, 15D/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: DN
        },

        Node2: {
            NodeStop: "Lakdi Ka Pul",
            NodeRoutes: "5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229, 5R, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node3: {
            NodeStop: "Shadan College",
            NodeRoutes: "6X, 16/20",
            position: UP
        },
    },

    "__Shadan_College__": {
        Stop_Name: "Shadan College",

        Node1: {
            NodeStop: "Khairathabad",
            NodeRoutes: "6X, 9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W, 16/20",
            position: UP
        },

        Node2: {
            NodeStop: "Khairathabad",
            NodeRoutes: "9K/102",
            position: DN
        },
    },

    "__Khairathabad__": {
        Stop_Name: "Khairathabad",

        Node1: {
            NodeStop: "Irrum Manzil",
            NodeRoutes: "6X, 9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W, 16/20",
            position: UP
        },

        Node2: {
            NodeStop: "Lakdi Ka Pul",
            NodeRoutes: "6X, 9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W, 16/20, 16/20, 16ES",
            position: DN
        },

        Node3: {
            NodeStop: "Irrum Manzil",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Lakdi Ka Pul",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Khairathabad_RTA_Office__": {
        Stop_Name: "Khairathabad RTA Office",

        Node1: {
            NodeStop: "Khairathabad",
            NodeRoutes: "9K/102",
            position: UP
        },

        Node2: {
            NodeStop: "Khairathabad",
            NodeRoutes: "6X, 9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W, 16/20, 16ES",
            position: DN
        }
    },

    "__Irrum_Manzil__": {
        Stop_Name: "Irrum Manzil",

        Node1: {
            NodeStop: "Khairathabad RTA Office",
            NodeRoutes: "6X, 9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W, 16/20, 16ES",
            position: DN
        },

        Node2: {
            NodeStop: "Panjagutta NIMS",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },

        Node3: {
            NodeStop: "Panjagutta NIMS",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Khairathabad RTA Office",
            NodeRoutes: "9K/102",
            position: UP
        },

    },

    "__Panjagutta_NIMS__": {
        Stop_Name: "Panjagutta NIMS",

        Node1: {
            NodeStop: "Panjagutta Metro",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },

        Node2: {
            NodeStop: "Irrum Manzil",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },

        Node3: {
            NodeStop: "Panjagutta Metro",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Irrum Manzil",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Panjagutta_Metro__": {
        Stop_Name: "Panjagutta Metro",

        Node1: {
            NodeStop: "Ameerpet",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },

        Node2: {
            NodeStop: "Panjagutta NIMS",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },

        Node3: {
            NodeStop: "Ameerpet",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Panjagutta NIMS",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Ameerpet__": {
        Stop_Name: "Ameerpet",

        Node1: {
            NodeStop: "Mythrivanam",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: UP
        },

        Node2: {
            NodeStop: "Panjagutta Metro",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },

        Node3: {
            NodeStop: "Mythrivanam",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Panjagutta Metro",
            NodeRoutes: "9K/102",
            position: UP
        },

        Node5: {
            NodeStop: "Satyam X Roads",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16C/10H, 16S/10YF",
            position: UP
        },

        Node6: {
            NodeStop: "Shesh Mahal",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16C/10H, 16S/10YF",
            position: DN
        },
    },

    "__Shesh_Mahal__": {
        Stop_Name: "Shesh Mahal",

        Node1: {
            NodeStop: "Lal Bunglow",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X, 10W, 10Y, 10YF, 16A/10H, 16C/10H, 16S/10YF",
            position: DN
        }
    },

    "__Mythrivanam__": {
        Stop_Name: "Mythrivanam",

        Node1: {
            NodeStop: "State Home",
            NodeRoutes: "9YF, 9YF/11W, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10W, 10Y, 10YF, 11W, 16A/10H, 16C/10H, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "SR Nagar",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 10, 10F, 10FV, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10X",
            position: UP
        },

        Node3: {
            NodeStop: "Ameerpet",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W",
            position: DN
        },

        Node4: {
            NodeStop: "Ameerpet",
            NodeRoutes: "10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10W, 10X, 10Y, 10YF, 16A/10H, 16C/10H",
            position: DN
        },

        Node5: {
            NodeStop: "SR Nagar",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node6: {
            NodeStop: "Ameerpet",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__State_Home__": {
        Stop_Name: "State Home",

        Node1: {
            NodeStop: "Yousufguda",
            NodeRoutes: "9YF, 9YF/11W, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10W, 10Y, 10YF, 11W, 16A/10H, 16C/10H, 16S/10YF",
            position: UP
        }
    },

    "__Yousufguda__": {
        Stop_Name: "Yousufguda",

        Node1: {
            NodeStop: "Yousufguda Check Post",
            NodeRoutes: "9YF, 9YF/11W, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10W, 10YF, 11W, 16A/10H, 16C/10H, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Bright School",
            NodeRoutes: "9YF, 9YF/11W, 19YF",
            position: DN
        },

        Node3: {
            NodeStop: "Krishna Kanth Park",
            NodeRoutes: "10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10W, 10YF, 11W, 16A/10H, 16C/10H, 16S/10YF",
            position: DN
        },
    },

    "__Krishna_Kanth_Park__": {
        Stop_Name: "Krishna Kanth Park",

        Node1: {
            NodeStop: "Vengal Rao Nagar",
            NodeRoutes: "10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10W, 10YF, 11W, 16A/10H, 16C/10H, 16S/10YF",
            position: DN
        },
    },

    "__Vengal_Rao_Nagar__": {
        Stop_Name: "Vengal Rao Nagar",

        Node1: {
            NodeStop: "SR Nagar",
            NodeRoutes: "9A, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10W, 10YF, 11W, 16A/10H, 16C/10H, 16S/10YF",
            position: DN
        },
    },

    "__Bright_School__": {
        Stop_Name: "Bright School",

        Node1: {
            NodeStop: "Sri Nagar Colony",
            NodeRoutes: "9YF, 9YF/11W, 19YF",
            position: DN
        },
    },

    "__Sri_Nagar_Colony__": {
        Stop_Name: "Sri Nagar Colony",

        Node1: {
            NodeStop: "GHMC Park",
            NodeRoutes: "9YF, 9YF/11W, 19YF",
            position: DN
        },
    },

    "__GHMC_Park__": {
        Stop_Name: "GHMC Park",

        Node1: {
            NodeStop: "Ameerpet",
            NodeRoutes: "9YF, 9YF/11W, 19YF",
            position: DN
        },
    },

    "__Yousufguda_Check_Post__": {
        Stop_Name: "Yousufguda Check Post",

        Node1: {
            NodeStop: "Rehmat Nagar",
            NodeRoutes: "9YF, 10YF, 19YF, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Krishna Nagar",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW, 16A/10H, 16C/10H",
            position: UP
        },

        Node3: {
            NodeStop: "Yousufguda",
            NodeRoutes: "9YF, 9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 10YF, 11W, 16A/10H, 16C/10H, 16S/10YF",
            position: DN
        },
    },

    "__Krishna_Nagar__": {
        Stop_Name: "Krishna Nagar",

        Node1: {
            NodeStop: "Indira Nagar (JBLHLS)",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Yousufguda Check Post",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: DN
        },
    },

    "__Indira_Nagar_(JBLHLS)__": {
        Stop_Name: "Indira Nagar (JBLHLS)",

        Node1: {
            NodeStop: "Venkatagiri",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Krishna Nagar",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: DN
        },
    },

    "__Venkatagiri__": {
        Stop_Name: "Venkatagiri",

        Node1: {
            NodeStop: "Jublie Hills Check Post",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Indira Nagar (JBLHLS)",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: DN
        },
    },

    "__Jublie_Hills_Check_Post__": {
        Stop_Name: "Jublie Hills Check Post",

        Node1: {
            NodeStop: "Usha Kiran Movies",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Venkatagiri",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: DN
        },
    },

    "__Usha_Kiran_Movies__": {
        Stop_Name: "Usha Kiran Movies",

        Node1: {
            NodeStop: "Pedhammagudi",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Jublie Hills Check Post",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: DN
        },
    },


    "__Pedhammagudi__": {
        Stop_Name: "Pedhammagudi",

        Node1: {
            NodeStop: "Madhapur",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Usha Kiran Movies",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: DN
        },
    },

    "__Madhapur__": {
        Stop_Name: "Madhapur",

        Node1: {
            NodeStop: "Madhapur PS",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Pedhammagudi",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: DN
        },
    },

    "__Madhapur_PS__": {
        Stop_Name: "Madhapur PS",

        Node1: {
            NodeStop: "Madhapur Petrol Bunk",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Madhapur",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: DN
        },
    },

    "__Madhapur_Petrol_Bunk__": {
        Stop_Name: "Madhapur Petrol Bunk",

        Node1: {
            NodeStop: "Image Hospital",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Madhapur PS",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: DN
        },
    },

    "__Image_Hospital__": {
        Stop_Name: "Image Hospital",

        Node1: {
            NodeStop: "Hitech City",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Madhapur Petrol Bunk",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: DN
        },
    },

    "__Rehmat_Nagar__": {
        Stop_Name: "Rehmat Nagar",

        Node1: {
            NodeStop: "Karmika Nagar",
            NodeRoutes: "9YF, 10YF, 19YF, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Yousufguda Check Post",
            NodeRoutes: "9YF, 10YF, 19YF, 16S/10YF",
            position: DN
        },
    },

    "__Karmika_Nagar__": {
        Stop_Name: "Karmika Nagar",

        Node1: {
            NodeStop: "Shriram Nagar (BRBND)",
            NodeRoutes: "9YF, 10YF, 19YF, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Rehmat Nagar",
            NodeRoutes: "9YF, 10YF, 19YF, 16S/10YF",
            position: DN
        },
    },

    "__Shriram_Nagar_(BRBND)__": {
        Stop_Name: "Shriram Nagar (BRBND)",

        Node1: {
            NodeStop: "Kalyan Nagar (BRBND)",
            NodeRoutes: "9YF, 10YF, 19YF, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Karmika Nagar",
            NodeRoutes: "9YF, 10YF, 19YF, 16S/10YF",
            position: DN
        },
    },

    "__Kalyan_Nagar_(BRBND)__": {
        Stop_Name: "Kalyan Nagar (BRBND)",

        Node1: {
            NodeStop: "Mothi Nagar",
            NodeRoutes: "9YF, 10YF, 19YF, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Shriram Nagar (BRBND)",
            NodeRoutes: "9YF, 10YF, 19YF, 16S/10YF",
            position: DN
        },
    },

    "__Mothi_Nagar__": {
        Stop_Name: "Mothi Nagar",

        Node1: {
            NodeStop: "Borabanda",
            NodeRoutes: "9F, 9YF, 10YF, 19YF, 9F, 10F, 10FV, 19F, 16S/10YF",
            position: UP
        },

        Node2: {
            NodeStop: "Kalyan Nagar (BRBND)",
            NodeRoutes: "9YF, 10YF, 19YF, 16S/10YF",
            position: DN
        },

        Node3: {
            NodeStop: "Kabir Nagar",
            NodeRoutes: "9F, 10F, 10FV, 19F",
            position: DN
        },
    },

    "__Borabanda__": {
        Stop_Name: "Borabanda",

        Node1: {
            NodeStop: "Allapur",
            NodeRoutes: "10FV",
            position: UP
        },

        Node2: {
            NodeStop: "Mothi Nagar",
            NodeRoutes: "9F, 9YF, 10YF, 19YF, 9F, 10F, 10FV, 19F, 16S/10YF",
            position: DN
        }
    },

    "__Allapur__": {
        Stop_Name: "Allapur",

        Node1: {
            NodeStop: "Parvath Nagar",
            NodeRoutes: "10FV",
            position: UP
        },

        Node2: {
            NodeStop: "Borabanda",
            NodeRoutes: "10FV",
            position: DN
        }
    },

    "__Parvath_Nagar__": {
        Stop_Name: "Parvath Nagar",

        Node1: {
            NodeStop: "Hitech City",
            NodeRoutes: "10FV",
            position: UP
        },

        Node2: {
            NodeStop: "Allapur",
            NodeRoutes: "10FV",
            position: DN
        }
    },

    "__SR_Nagar__": {
        Stop_Name: "SR Nagar",

        Node1: {
            NodeStop: "ESI Hospital",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 10, 10F, 10FV, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G",
            position: UP
        },

        Node2: {
            NodeStop: "Mythrivanam",
            NodeRoutes: "9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 10, 10F, 10FV, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10W, 10X, 10YF, 11W, 16A/10H, 16C/10H, 16S/10YF",
            position: DN
        },

        Node3: {
            NodeStop: "ESI Hospital",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Mythrivanam",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__ESI_Hospital__": {
        Stop_Name: "ESI Hospital",

        Node1: {
            NodeStop: "Erragadda",
            NodeRoutes: "9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 10, 10F, 10FV, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G",
            position: UP
        },

        Node2: {
            NodeStop: "Vikaspuri Colony",
            NodeRoutes: "9A",
            position: UP
        },

        Node3: {
            NodeStop: "SR Nagar",
            NodeRoutes: "9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 10, 10F, 10FV, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G",
            position: DN
        },

        Node4: {
            NodeStop: "Erragadda",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node5: {
            NodeStop: "SR Nagar",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Gokul_Theater__": {
        Stop_Name: "Gokul Theater",

        Node1: {
            NodeStop: "ESI Hospital",
            NodeRoutes: "9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 10, 10F, 10FV, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G",
            position: DN
        },

        Node2: {
            NodeStop: "ESI Hospital",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Erragadda__": {
        Stop_Name: "Erragadda",

        Node1: {
            NodeStop: "Erragadda X Roads",
            NodeRoutes: "9XM, 9XM/230P, 10",
            position: UP
        },

        Node2: {
            NodeStop: "Bharath Nagar",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G",
            position: UP
        },

        Node3: {
            NodeStop: "Panduranga Nagar",
            NodeRoutes: "9F, 10F, 10FV, 19F",
            position: UP
        },

        Node4: {
            NodeStop: "Gokul Theater",
            NodeRoutes: "9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 10, 10F, 10FV, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G",
            position: DN
        },

        Node5: {
            NodeStop: "Bharath Nagar",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node6: {
            NodeStop: "Gokul Theater",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Bharath_Nagar__": {
        Stop_Name: "Bharath Nagar",

        Node1: {
            NodeStop: "Moosapet",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G",
            position: UP
        },

        Node2: {
            NodeStop: "Erragadda",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G",
            position: DN
        },

        Node3: {
            NodeStop: "Moosapet",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Erragadda",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Moosapet__": {
        Stop_Name: "Moosapet",

        Node1: {
            NodeStop: "Prashanth Nagar (KP)",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D",
            position: UP
        },

        Node2: {
            NodeStop: "Bharath Nagar",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G",
            position: DN
        },

        Node3: {
            NodeStop: "Prashanth Nagar (KP)",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Bharath Nagar",
            NodeRoutes: "9K/102",
            position: UP
        },

        Node5: {
            NodeStop: "Kukatpally Govt College",
            NodeRoutes: "10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G",
            position: UP
        },
    },

    "__Kukatpally_Govt_College__": {
        Stop_Name: "Kukatpally Govt College",

        Node1: {
            NodeStop: "Kukatpally",
            NodeRoutes: "10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G",
            position: UP
        },

    },

    "__Kukatpally__": {
        Stop_Name: "Kukatpally",

        Node1: {
            NodeStop: "KPHB Main Road",
            NodeRoutes: "10J, 10K, 10KG, 10KL, 10KM, 10KM/224G",
            position: UP
        },

        Node2: {
            NodeStop: "Viveka Nanda Nagar",
            NodeRoutes: "10KJ",
            position: UP
        },

        Node3: {
            NodeStop: "Moosapet",
            NodeRoutes: "10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G",
            position: DN
        },
    },

    "__KPHB_Main_Road__": {
        Stop_Name: "KPHB Main Road",

        Node1: {
            NodeStop: "JNTU College",
            NodeRoutes: "10J, 10KG, 10KL, 10KM, 10KM/224G",
            position: UP
        },

        Node2: {
            NodeStop: "",
            NodeRoutes: "10K",
            position: UP
        },

        Node3: {
            NodeStop: "Kukatpally",
            NodeRoutes: "10J, 10K, 10KG, 10KL, 10KM, 10KM/224G",
            position: DN
        },
    },

    "__JNTU_College__": {
        Stop_Name: "JNTU College",

        Node1: {
            NodeStop: "Hyder Nagar",
            NodeRoutes: "10KL, 10KM, 10KM/224G",
            position: UP
        },

        Node2: {
            NodeStop: "",
            NodeRoutes: "10KG",
            position: UP
        },

        Node3: {
            NodeStop: "KPHB Main Road",
            NodeRoutes: "10J, 10KG, 10KL, 10KM, 10KM/224G",
            position: DN
        },
    },

    "__Hyder_Nagar__": {
        Stop_Name: "Hyder Nagar",

        Node1: {
            NodeStop: "Miyapur Metro Stn.",
            NodeRoutes: "10KL, 10KM, 10KM/224G",
            position: UP
        },

        Node2: {
            NodeStop: "JNTU College",
            NodeRoutes: "10KL, 10KM, 10KM/224G",
            position: DN
        },
    },

    "__Miyapur_Metro_Stn.__": {
        Stop_Name: "Miyapur Metro Stn.",

        Node1: {
            NodeStop: "Miyapur X Roads",
            NodeRoutes: "10KL, 10KM, 10KM/224G",
            position: UP
        },

        Node2: {
            NodeStop: "Hyder Nagar",
            NodeRoutes: "10KL, 10KM, 10KM/224G",
            position: DN
        },
    },

    "__Miyapur_X_Roads__": {
        Stop_Name: "Miyapur X Roads",

        Node1: {
            NodeStop: "Miyapur",
            NodeRoutes: "10KL",
            position: UP
        },

        Node2: {
            NodeStop: "Land Mark Tower",
            NodeRoutes: "10KM/224G",
            position: UP
        },

        Node3: {
            NodeStop: "Miyapur Metro Stn.",
            NodeRoutes: "10KL, 10KM, 10KM/224G",
            position: DN
        },
    },

    "__Prashanth_Nagar_(KP)__": {
        Stop_Name: "Prashanth Nagar (KP)",

        Node1: {
            NodeStop: "Balanagar",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D",
            position: UP
        },

        Node2: {
            NodeStop: "Moosapet",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D",
            position: DN
        },

        Node3: {
            NodeStop: "Balanagar",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Moosapet",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Balanagar__": {
        Stop_Name: "Balanagar",

        Node1: {
            NodeStop: "IDPL Water Tank",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Prashanth Nagar (KP)",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D",
            position: DN
        },

        Node3: {
            NodeStop: "Fathe Nagar X Roads",
            NodeRoutes: "9XM, 9XM/230P",
            position: DN
        },

        Node4: {
            NodeStop: "IDPL Water Tank",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node5: {
            NodeStop: "Prashanth Nagar (KP)",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__IDPL_Water_Tank__": {
        Stop_Name: "IDPL Water Tank",

        Node1: {
            NodeStop: "IDPL",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Balanagar",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: DN
        },

        Node3: {
            NodeStop: "IDPL",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Balanagar",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__IDPL__": {
        Stop_Name: "IDPL",

        Node1: {
            NodeStop: "Ganesh Nagar",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Erragodalu",
            NodeRoutes: "9X/41C",
            position: UP
        },

        Node3: {
            NodeStop: "IDPL Water Tank",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: DN
        },

        Node4: {
            NodeStop: "Ganesh Nagar",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node5: {
            NodeStop: "IDPL Water Tank",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Ganesh_Nagar__": {
        Stop_Name: "Ganesh Nagar",

        Node1: {
            NodeStop: "Chintal",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "IDPL",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: DN
        },

        Node3: {
            NodeStop: "Chintal",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "IDPL",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Chintal__": {
        Stop_Name: "Chintal",

        Node1: {
            NodeStop: "Gajula Ramaram X Roads",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Ganesh Nagar",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: DN
        },

        Node3: {
            NodeStop: "Gajula Ramaram X Roads",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Ganesh Nagar",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Gajula_Ramaram_X_Roads__": {
        Stop_Name: "Gajula Ramaram X Roads",

        Node1: {
            NodeStop: "Shahpur Nagar",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Chintal",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: DN
        },

        Node3: {
            NodeStop: "Shahpur Nagar",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Chintal",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Shahpur_Nagar__": {
        Stop_Name: "Shahpur Nagar",

        Node1: {
            NodeStop: "Jeedimetla Substation",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Gajula Ramaram X Roads",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: DN
        },

        Node3: {
            NodeStop: "Jeedimetla Substation",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Gajula Ramaram X Roads",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Jeedimetla_Substation__": {
        Stop_Name: "Jeedimetla Substation",

        Node1: {
            NodeStop: "Jeedimetla",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Shahpur Nagar Rythu Bazar",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: DN
        },

        Node3: {
            NodeStop: "Jeedimetla",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Shahpur Nagar Rythu Bazar",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Shahpur_Nagar_Rythu_Bazar__": {
        Stop_Name: "Shahpur Nagar Rythu Bazar",

        Node1: {
            NodeStop: "Shahpur Nagar",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: DN
        },

        Node2: {
            NodeStop: "Shahpur Nagar",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Jeedimetla__": {
        Stop_Name: "Jeedimetla",

        Node1: {
            NodeStop: "Saibad X Roads",
            NodeRoutes: "9K/230P, 9K/272G, 9X/230P, 9X/272G, 9X/283D, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Jeedimetla Substation",
            NodeRoutes: "9K, 9K/230P, 9K/272G, 9X, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P",
            position: DN
        },

        Node3: {
            NodeStop: "Saibad X Roads",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Jeedimetla Substation",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Saibad_X_Roads__": {
        Stop_Name: "Saibad X Roads",

        Node1: {
            NodeStop: "Suraram",
            NodeRoutes: "9K/230P, 9K/272G, 9X/230P, 9X/272G, 9X/283D, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Jeedimetla",
            NodeRoutes: "9K/230P, 9K/272G, 9X/230P, 9X/272G, 9X/283D, 9XM/230P",
            position: DN
        },

        Node3: {
            NodeStop: "Suraram",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Jeedimetla",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Suraram__": {
        Stop_Name: "Suraram",

        Node1: {
            NodeStop: "Govt. College (Bahudrpally)",
            NodeRoutes: "9K/230P, 9K/272G, 9X/230P, 9X/272G, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Suraram Circle",
            NodeRoutes: "9X/283D",
            position: UP
        },

        Node3: {
            NodeStop: "Saibad X Roads",
            NodeRoutes: "9K/230P, 9K/272G, 9X/230P, 9X/272G, 9X/283D, 9XM/230P",
            position: DN
        },

        Node4: {
            NodeStop: "Govt. College (Bahudrpally)",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node5: {
            NodeStop: "Saibad X Roads",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Govt._College_(Bahudrpally)__": {
        Stop_Name: "Govt. College (Bahudrpally)",

        Node1: {
            NodeStop: "Bahudurpally X Roads",
            NodeRoutes: "9K/230P, 9K/272G, 9X/230P, 9X/272G, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Suraram",
            NodeRoutes: "9K/230P, 9K/272G, 9X/230P, 9X/272G, 9XM/230P",
            position: DN
        },

        Node3: {
            NodeStop: "Bahudurpally X Roads",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Suraram",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Bahudurpally_X_Roads__": {
        Stop_Name: "Bahudurpally X Roads",

        Node1: {
            NodeStop: "Gandimaisamma",
            NodeRoutes: "9K/230P, 9K/272G, 9X/230P, 9X/272G, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Govt. College (Bahudrpally)",
            NodeRoutes: "9K/230P, 9K/272G, 9X/230P, 9X/272G, 9XM/230P",
            position: DN
        },

        Node3: {
            NodeStop: "Gandimaisamma",
            NodeRoutes: "9K/102",
            position: DN
        },

        Node4: {
            NodeStop: "Govt. College (Bahudrpally)",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Gandimaisamma__": {
        Stop_Name: "Gandimaisamma",

        Node1: {
            NodeStop: "Domara Pochampally",
            NodeRoutes: "9K/230P, 9X/230P, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Bahudurpally X Roads",
            NodeRoutes: "9K/230P, 9K/272G, 9X/230P, 9X/272G, 9XM/230P",
            position: DN
        },

        Node3: {
            NodeStop: "Bahudurpally X Roads",
            NodeRoutes: "9K/102",
            position: UP
        },
    },

    "__Domara_Pochampally__": {
        Stop_Name: "Domara Pochampally",

        Node1: {
            NodeStop: "MLRIT College",
            NodeRoutes: "9K/230P, 9X/230P, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Gandimaisamma",
            NodeRoutes: "9K/230P, 9X/230P, 9XM/230P",
            position: DN
        }
    },

    "__MLRIT_College__": {
        Stop_Name: "MLRIT College",

        Node1: {
            NodeStop: "Dundigal",
            NodeRoutes: "9K/230P, 9X/230P, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Domara Pochampally",
            NodeRoutes: "9K/230P, 9X/230P, 9XM/230P",
            position: DN
        }
    },

    "__Dundigal__": {
        Stop_Name: "Dundigal",

        Node1: {
            NodeStop: "MLRIT College",
            NodeRoutes: "9K/230P, 9X/230P, 9XM/230P",
            position: DN
        }
    },

    "__Suraram_Circle__": {
        Stop_Name: "Suraram Circle",

        Node1: {
            NodeStop: "Suraram Colony",
            NodeRoutes: "9X/283D",
            position: UP
        },

        Node2: {
            NodeStop: "Suraram",
            NodeRoutes: "9X/283D",
            position: DN
        }
    },

    "__Suraram_Colony__": {
        Stop_Name: "Suraram Colony",

        Node1: {
            NodeStop: "Suraram Circle",
            NodeRoutes: "9X/283D",
            position: DN
        }
    },

    "__Erragodalu__": {
        Stop_Name: "Erragodalu",

        Node1: {
            NodeStop: "Giri Nagar",
            NodeRoutes: "9X/41C",
            position: UP
        },

        Node2: {
            NodeStop: "IDPL",
            NodeRoutes: "9X/41C",
            position: DN
        }
    },

    "__Giri_Nagar__": {
        Stop_Name: "Giri Nagar",

        Node1: {
            NodeStop: "Gandhi Nagar (IDPL)",
            NodeRoutes: "9X/41C",
            position: UP
        },

        Node2: {
            NodeStop: "Erragodalu",
            NodeRoutes: "9X/41C",
            position: DN
        }
    },

    "__Gandhi_Nagar_(IDPL)__": {
        Stop_Name: "Gandhi Nagar (IDPL)",

        Node1: {
            NodeStop: "Ranga Reddy Nagar",
            NodeRoutes: "9X/41C",
            position: UP
        },

        Node2: {
            NodeStop: "Giri Nagar",
            NodeRoutes: "9X/41C",
            position: DN
        }
    },

    "__Ranga_Reddy_Nagar__": {
        Stop_Name: "Ranga Reddy Nagar",

        Node1: {
            NodeStop: "Ranga Reddy Kaman",
            NodeRoutes: "9X/41C",
            position: UP
        },

        Node2: {
            NodeStop: "Gandhi Nagar (IDPL)",
            NodeRoutes: "9X/41C",
            position: DN
        }
    },

    "__Ranga_Reddy_Kaman__": {
        Stop_Name: "Ranga Reddy Kaman",

        Node1: {
            NodeStop: "Asbestos Colony",
            NodeRoutes: "9X/41C",
            position: UP
        },

        Node2: {
            NodeStop: "Ranga Reddy Nagar",
            NodeRoutes: "9X/41C",
            position: DN
        }
    },

    "__Asbestos_Colony__": {
        Stop_Name: "Asbestos Colony",

        Node1: {
            NodeStop: "Ranga Reddy Kaman",
            NodeRoutes: "9X/41C",
            position: DN
        }
    },

    "__Panduranga_Nagar__": {
        Stop_Name: "Panduranga Nagar",

        Node1: {
            NodeStop: "Kabir Nagar",
            NodeRoutes: "9F, 10F, 10FV, 19F",
            position: UP
        },

        Node2: {
            NodeStop: "Erragadda",
            NodeRoutes: "9F, 10F, 10FV, 19F",
            position: DN
        }
    },

    "__Kabir_Nagar__": {
        Stop_Name: "Kabir Nagar",

        Node1: {
            NodeStop: "Mothi Nagar",
            NodeRoutes: "9F, 10F, 10FV, 19F",
            position: UP
        },

        Node2: {
            NodeStop: "Panduranga Nagar",
            NodeRoutes: "9F, 10F, 10FV, 19F",
            position: DN
        }
    },


    "__Erragadda_X_Roads__": {
        Stop_Name: "Erragadda X Roads",

        Node1: {
            NodeStop: "Sanath Nagar PS",
            NodeRoutes: "9XM, 9XM/230P, 10",
            position: UP
        }
    },

    "__Sanath_Nagar_PS__": {
        Stop_Name: "Sanath Nagar PS",

        Node1: {
            NodeStop: "Sanath Nagar",
            NodeRoutes: "9XM, 9XM/230P, 10",
            position: UP
        },

        Node2: {
            NodeStop: "Erragadda",
            NodeRoutes: "9XM, 9XM/230P, 10",
            position: DN
        }
    },

    "__Sanath_Nagar__": {
        Stop_Name: "Sanath Nagar",

        Node1: {
            NodeStop: "Fathe Nagar",
            NodeRoutes: "9XM, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Sanath Nagar PS",
            NodeRoutes: "9XM, 9XM/230P, 10",
            position: DN
        }
    },

    "__Fathe_Nagar__": {
        Stop_Name: "Fathe Nagar",

        Node1: {
            NodeStop: "Fathe Nagar X Roads",
            NodeRoutes: "9XM, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Sanath Nagar PS",
            NodeRoutes: "9XM, 9XM/230P, 10",
            position: DN
        }
    },

    "__Fathe_Nagar_X_Roads__": {
        Stop_Name: "Fathe Nagar X Roads",

        Node1: {
            NodeStop: "Balanagar",
            NodeRoutes: "9XM, 9XM/230P",
            position: UP
        },

        Node2: {
            NodeStop: "Fathe Nagar",
            NodeRoutes: "9XM, 9XM/230P, 10",
            position: DN
        }
    },

    "__Vikaspuri_Colony__": {
        Stop_Name: "Vikaspuri Colony",

        Node1: {
            NodeStop: "AG Colony",
            NodeRoutes: "9A",
            position: UP
        },

        Node2: {
            NodeStop: "Vengal Rao Nagar",
            NodeRoutes: "9A",
            position: DN
        },
    },

    "__AG_Colony__": {
        Stop_Name: "AG Colony",

        Node1: {
            NodeStop: "Vikaspuri Colony",
            NodeRoutes: "9A",
            position: DN
        },
    },

    "__Telephone_Bhavan__": {
        Stop_Name: "Telephone Bhavan",

        Node1: {
            NodeStop: "Secretariate",
            NodeRoutes: "3K/6M, 3KN/6M, 5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 6H, 6N/47W, 6NW, 6R, 6RK, 15D/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K, 16/20, 16ES",
            position: DN
        },

        Node2: {
            NodeStop: "Secretariate",
            NodeRoutes: "5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229, 5R, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node3: {
            NodeStop: "Ramakrishna Mutt",
            NodeRoutes: "6IW/252, 6X",
            position: DN
        },
    },

    "__NMDC__": {
        Stop_Name: "NMDC",

        Node1: {
            NodeStop: "SD Eye Hospital",
            NodeRoutes: "3K/6M, 3KN/6M, 5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5W, 6H, 6N/47W, 6NW, 6R, 6RK, 6IW/252, 15D/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K, 16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: UP
        },

        Node2: {
            NodeStop: "Mahavir Hospital",
            NodeRoutes: "3K/6M, 3KN/6M, 5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5W, 6H, 6N/47W, 6NW, 6R, 6RK, 6IW/252, 15D/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K",
            position: DN
        },

        Node3: {
            NodeStop: "SD Eye Hospital",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node4: {
            NodeStop: "Mahavir Hospital",
            NodeRoutes: "5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229, 5R, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node5: {
            NodeStop: "Masab Tank X Roads",
            NodeRoutes: "16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: DN
        },
    },

    "__SD_Eye_Hospital__": {
        Stop_Name: "SD Eye Hospital",

        Node1: {
            NodeStop: "Mehdipatnam",
            NodeRoutes: "3K/6M, 3KN/6M, 5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5W, 6H, 6N/47W, 6NW, 6R, 6RK, 6IW/252, 15D/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K, 16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: UP
        },

        Node2: {
            NodeStop: "NMDC",
            NodeRoutes: "3K/6M, 3KN/6M, 5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5W, 6H, 6N/47W, 6NW, 6R, 6RK, 6IW/252, 15D/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K, 16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: DN
        },

        Node3: {
            NodeStop: "Mehdipatnam",
            NodeRoutes: "6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node4: {
            NodeStop: "NMDC",
            NodeRoutes: "5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229, 5R, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },
    },

    "__Mehdipatnam__": {
        Stop_Name: "Mehdipatnam",

        Node1: {
            NodeStop: "SD Eye Hospital",
            NodeRoutes: "3K/6M, 3KN/6M, 5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5W, 6H, 6N/47W, 6NW, 6R, 6RK, 6IW/252, 15D/20, 16A/5K, 16AB/5K, 16AD/5K, 16C/5K, 16CD/5K, 16D/5K, 16A/49M, 16C/49M, 16CD/49M, 16D/49M, 16H/49M, 49M, 49M/92A, 49M/188B, 49MG, 49MT, 250/49M, 250/49MT, 250C/49M, 250D/49M",
            position: DN
        },

        Node2: {
            NodeStop: "SD Eye Hospital",
            NodeRoutes: "5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229, 5R, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node3: {
            NodeStop: "Rethibowli",
            NodeRoutes: "5G, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5W, 6N/47W, 6NW, 6IW/252, 6RK, 92K",
            position: UP
        },

        Node4: {
            NodeStop: "Rethibowli",
            NodeRoutes: "6L/281",
            position: DN
        },

        Node5: {
            NodeStop: "Milan Talkies",
            NodeRoutes: "5M",
            position: DN
        },
    },

    "__Rethibowli__": {
        Stop_Name: "Rethibowli",

        Node1: {
            NodeStop: "Nanal Nagar",
            NodeRoutes: "5G, 5KM, 5K/120K, 5K/125, 5K/188, 5W, 6N/47W, 6NW, 6IW/252, 6RK",
            position: UP
        },

        Node2: {
            NodeStop: "Nanal Nagar",
            NodeRoutes: "6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Mehdipatnam",
            NodeRoutes: "5G, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5W, 6N/47W, 6NW, 6IW/252, 6RK, 92K",
            position: DN
        },

        Node4: {
            NodeStop: "Mehdipatnam",
            NodeRoutes: "6L/281",
            position: UP
        },

        Node5: {
            NodeStop: "Laxmi Nagar (MP)",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: UP
        },
    },

    "__Laxmi_Nagar_(MP)__": {
        Stop_Name: "Laxmi Nagar (MP)",

        Node1: {
            NodeStop: "Jyothi Nagar (MP)",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "Rethibowli",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: DN
        }
    },

    "__Jyothi_Nagar_(MP)__": {
        Stop_Name: "Jyothi Nagar (MP)",

        Node1: {
            NodeStop: "Attapur Ring Road",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "Laxmi Nagar (MP)",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: DN
        }
    },

    "__Attapur__": {
        Stop_Name: "Attapur",

        Node1: {
            NodeStop: "Hyderguda X Roads",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "Attapur Ring Road",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: DN
        }
    },

    "__Hyderguda_X_Roads__": {
        Stop_Name: "Hyderguda X Roads",

        Node1: {
            NodeStop: "Upperpally",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "Attapur",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: DN
        }
    },

    "__Upperpally__": {
        Stop_Name: "Upperpally",

        Node1: {
            NodeStop: "Dairy Farm (CNTLMT)",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "Hyderguda X Roads",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: DN
        }
    },

    "__Dairy_Farm_(CNTLMT)__": {
        Stop_Name: "Dairy Farm (CNTLMT)",

        Node1: {
            NodeStop: "Lal Dhaba",
            NodeRoutes: "5K/92A, 5K/251, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "NPPTI",
            NodeRoutes: "5K/92R",
            position: UP
        },

        Node3: {
            NodeStop: "Upperpally",
            NodeRoutes: "5K/92A, 5K/92R, 5K/251, 92K",
            position: DN
        }
    },

    "__NPPTI__": {
        Stop_Name: "NPPTI",

        Node1: {
            NodeStop: "Budvel",
            NodeRoutes: "5K/92R",
            position: UP
        },

        Node2: {
            NodeStop: "Dairy Farm (CNTLMT)",
            NodeRoutes: "5K/92R",
            position: DN
        }
    },

    "__Budvel__": {
        Stop_Name: "Budvel",

        Node1: {
            NodeStop: "Rajendra Nagar Village",
            NodeRoutes: "5K/92R",
            position: UP
        },

        Node2: {
            NodeStop: "NPPTI",
            NodeRoutes: "5K/92R",
            position: DN
        }
    },

    "__Rajendra_Nagar_Village__": {
        Stop_Name: "Rajendra Nagar Village",

        Node1: {
            NodeStop: "Rajendra Nagar",
            NodeRoutes: "5K/92R",
            position: UP
        },

        Node2: {
            NodeStop: "Budvel",
            NodeRoutes: "5K/92R",
            position: DN
        }
    },

    "__Rajendra_Nagar__": {
        Stop_Name: "Rajendra Nagar",

        Node1: {
            NodeStop: "Rajendra Nagar Village",
            NodeRoutes: "5K/92R",
            position: DN
        }
    },

    "__Lal_Dhaba__": {
        Stop_Name: "Lal Dhaba",

        Node1: {
            NodeStop: "Weakers Section Colony",
            NodeRoutes: "5K/92A, 5K/251, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "Dairy Farm (CNTLMT)",
            NodeRoutes: "5K/92A, 5K/251, 92K",
            position: DN
        }
    },

    "__Weakers_Section_Colony__": {
        Stop_Name: "Weakers Section Colony",

        Node1: {
            NodeStop: "Shivarampally X Roads",
            NodeRoutes: "5K/92A, 5K/251, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "Lal Dhaba",
            NodeRoutes: "5K/92A, 5K/251, 92K",
            position: DN
        }
    },

    "Shivarampally_X_Roads": {
        Stop_Name: "Shivarampally X Roads",

        Node1: {
            NodeStop: "Aramghar",
            NodeRoutes: "5K/92A, 5K/251, 92K",
            position: UP
        },

        Node2: {
            NodeStop: "Weakers Section Colony",
            NodeRoutes: "5K/92A, 5K/251, 92K",
            position: DN
        }
    },

    "__Nanal_Nagar__": {
        Stop_Name: "Nanal Nagar",

        Node1: {
            NodeStop: "Toli Chowki",
            NodeRoutes: "5K/125, 5KM, 5W, 6N/47W, 6NW, 6IW/252",
            position: UP
        },

        Node2: {
            NodeStop: "Toli Chowki",
            NodeRoutes: "6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Rethibowli",
            NodeRoutes: "5G, 5KM, 5K/120K, 5K/125, 5K/188, 5W, 6N/47W, 6NW, 6IW/252, 6RK",
            position: DN
        },

        Node4: {
            NodeStop: "Rethibowli",
            NodeRoutes: "6L/281",
            position: UP
        },

        Node5: {
            NodeStop: "Langer House",
            NodeRoutes: "5G, 5K/120K, 5K/188, 6RK",
            position: UP
        },
    },

    "__Toli_Chowki__": {
        Stop_Name: "Toli Chowki",

        Node1: {
            NodeStop: "Galaxy Talkies",
            NodeRoutes: "5K/125, 5KM, 5W, 6N/47W, 6NW, 6IW/252",
            position: UP
        },

        Node2: {
            NodeStop: "Galaxy Talkies",
            NodeRoutes: "6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Nanal Nagar",
            NodeRoutes: "5K/125, 5KM, 5W, 6N/47W, 6NW, 6IW/252",
            position: DN
        },

        Node4: {
            NodeStop: "Nanal Nagar",
            NodeRoutes: "6L/281",
            position: UP
        },
    },

    "__Galaxy_Talkies__": {
        Stop_Name: "Galaxy Talkies",

        Node1: {
            NodeStop: "Shaikpet Nala",
            NodeRoutes: "5K/125, 5KM, 5W, 6N/47W, 6NW, 6IW/252",
            position: UP
        },

        Node2: {
            NodeStop: "Shaikpet Nala",
            NodeRoutes: "6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Toli Chowki",
            NodeRoutes: "5K/125, 5KM, 5W, 6N/47W, 6NW, 6IW/252",
            position: DN
        },

        Node4: {
            NodeStop: "Toli Chowki",
            NodeRoutes: "6L/281",
            position: UP
        },
    },

    "__Shaikpet_Nala__": {
        Stop_Name: "Shaikpet Nala",

        Node1: {
            NodeStop: "Shaikpet Dargah",
            NodeRoutes: "5K/125, 5KM, 5W, 6N/47W, 6NW, 6IW/252",
            position: UP
        },

        Node2: {
            NodeStop: "Shaikpet Dargah",
            NodeRoutes: "6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Galaxy Talkies",
            NodeRoutes: "5K/125, 5KM, 5W, 6N/47W, 6NW, 6IW/252",
            position: DN
        },

        Node4: {
            NodeStop: "Galaxy Talkies",
            NodeRoutes: "6L/281",
            position: UP
        },
    },

    "__Shaikpet_Dargah__": {
        Stop_Name: "Shaikpet Dargah",

        Node1: {
            NodeStop: "Khajaguda X Roads",
            NodeRoutes: "5K/125, 5W, 6N/47W, 6NW, 6IW/252",
            position: UP
        },

        Node2: {
            NodeStop: "Khajaguda X Roads",
            NodeRoutes: "6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Shaikpet Nala",
            NodeRoutes: "5K/125, 5KM, 5W, 6N/47W, 6NW, 6IW/252",
            position: DN
        },

        Node4: {
            NodeStop: "Shaikpet Nala",
            NodeRoutes: "6L/281",
            position: UP
        },

        Node5: {
            NodeStop: "OU Colony",
            NodeRoutes: "5KM",
            position: UP
        },
    },

    "__OU_Colony__": {
        Stop_Name: "OU Colony",

        Node1: {
            NodeStop: "Panchavati Colony",
            NodeRoutes: "5KM",
            position: UP
        },

        Node2: {
            NodeStop: "Shaikpet Dargah",
            NodeRoutes: "5KM",
            position: DN
        }
    },

    "__Panchavati_Colony__": {
        Stop_Name: "Panchavati Colony",

        Node1: {
            NodeStop: "Manikonda",
            NodeRoutes: "5KM",
            position: UP
        },

        Node2: {
            NodeStop: "OU Colony",
            NodeRoutes: "5KM",
            position: DN
        }
    },

    "__Manikonda__": {
        Stop_Name: "Manikonda",

        Node1: {
            NodeStop: "Panchavati Colony",
            NodeRoutes: "5KM",
            position: DN
        }
    },

    "__Khajaguda_X_Roads__": {
        Stop_Name: "Khajaguda X Roads",

        Node1: {
            NodeStop: "Bio Diversity",
            NodeRoutes: "5K/125, 5W, 6N/47W, 6NW, 6IW/252",
            position: UP
        },

        Node2: {
            NodeStop: "Bio Diversity",
            NodeRoutes: "6L/281, 9YF/11W, 11W, 113YIW",
            position: DN
        },

        Node3: {
            NodeStop: "Shaikpet Dargah",
            NodeRoutes: "5K/125, 5W, 6N/47W, 6NW, 6IW/252",
            position: DN
        },

        Node4: {
            NodeStop: "Shaikpet Dargah",
            NodeRoutes: "6L/281",
            position: UP
        },
    },

    "__Bio_Diversity__": {
        Stop_Name: "Bio Diversity",

        Node1: {
            NodeStop: "Cyberabad PS",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Mind Space",
            NodeRoutes: "6L/281, 9YF/11W, 11W, 113YIW",
            position: DN
        },

        Node3: {
            NodeStop: "Khajaguda X Roads",
            NodeRoutes: "6L/281",
            position: UP
        },

        Node4: {
            NodeStop: "Mind Space",
            NodeRoutes: "5K/125",
            position: UP
        },

        Node5: {
            NodeStop: "Khajaguda X Roads",
            NodeRoutes: "5K/125",
            position: DN
        },
    },

    "__VBIT_Park__": {
        Stop_Name: "VBIT Park",

        Node1: {
            NodeStop: "Mind Space",
            NodeRoutes: "10FV",
            position: DN
        },
    },

    "__Mind_Space__": {
        Stop_Name: "Mind Space",

        Node1: {
            NodeStop: "Bio Diversity",
            NodeRoutes: "6L/281, 9YF/11W, 11W, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Cyber Gateway",
            NodeRoutes: "6L/281, 9YF/11W, 10FV, 11W, 113YIW",
            position: DN
        },

        Node3: {
            NodeStop: "Cyber Gateway",
            NodeRoutes: "5K/125",
            position: UP
        },

        Node4: {
            NodeStop: "Bio Diversity",
            NodeRoutes: "5K/125",
            position: DN
        },

        Node5: {
            NodeStop: "VBIT Park",
            NodeRoutes: "10FV",
            position: UP
        },
    },

    "__Cyber_Gateway__": {
        Stop_Name: "Cyber Gateway",

        Node1: {
            NodeStop: "Mind Space",
            NodeRoutes: "6L/281, 9YF/11W, 10FV, 11W, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Hitech City",
            NodeRoutes: "6L/281, 9YF/11W, 10FV, 11W, 113YIW",
            position: DN
        },

        Node3: {
            NodeStop: "Hitech City",
            NodeRoutes: "5K/125",
            position: UP
        },

        Node4: {
            NodeStop: "Mind Space",
            NodeRoutes: "5K/125",
            position: DN
        },
    },

    "__Hitech_City__": {
        Stop_Name: "Hitech City",

        Node1: {
            NodeStop: "Cyber Gateway",
            NodeRoutes: "6L/281, 9YF/11W, 10FV, 11W, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Hitex Kaman",
            NodeRoutes: "6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Hitex Kaman",
            NodeRoutes: "5K/125, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 16A/10H, 16C/10H, 17H/10H, 18C/10H",
            position: UP
        },

        Node4: {
            NodeStop: "Cyber Gateway",
            NodeRoutes: "5K/125",
            position: DN
        },

        Node5: {
            NodeStop: "Image Hospital",
            NodeRoutes: "9YF/11W, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 11W, 16A/10H, 16C/10H, 17H/10H, 18C/10H, 113YH, 113YIW",
            position: DN
        },

        Node6: {
            NodeStop: "Parvath Nagar",
            NodeRoutes: "10FV",
            position: DN
        },
    },

    "__Hitex_Kaman__": {
        Stop_Name: "Hitex Kaman",

        Node1: {
            NodeStop: "Hitech City",
            NodeRoutes: "6L/281",
            position: UP
        },

        Node2: {
            NodeStop: "Jayabheri",
            NodeRoutes: "6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Jayabheri",
            NodeRoutes: "5K/125, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 16A/10H, 16C/10H, 17H/10H, 18C/10H",
            position: UP
        },

        Node4: {
            NodeStop: "Hitech City",
            NodeRoutes: "5K/125, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 16A/10H, 16C/10H, 17H/10H, 18C/10H",
            position: DN
        },
    },

    "__Jayabheri__": {
        Stop_Name: "Jayabheri",

        Node1: {
            NodeStop: "Hitex Kaman",
            NodeRoutes: "6L/281",
            position: UP
        },

        Node2: {
            NodeStop: "Kothaguda X Roads",
            NodeRoutes: "6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Kothaguda X Roads",
            NodeRoutes: "5K/125, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 16A/10H, 16C/10H, 17H/10H, 18C/10H",
            position: UP
        },

        Node4: {
            NodeStop: "Hitex Kaman",
            NodeRoutes: "5K/125, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 16A/10H, 16C/10H, 17H/10H, 18C/10H",
            position: DN
        },
    },

    "__Kothaguda_X_Roads__": {
        Stop_Name: "Kothaguda X Roads",

        Node1: {
            NodeStop: "Jayabheri",
            NodeRoutes: "6L/281",
            position: UP
        },

        Node2: {
            NodeStop: "Kondapur",
            NodeRoutes: "6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Kondapur",
            NodeRoutes: "5K/125, 10H, 10HA, 10HL, 16A/10H, 16C/10H, 17H/10H, 18C/10H",
            position: UP
        },

        Node4: {
            NodeStop: "Jayabheri",
            NodeRoutes: "5K/125, 10H, 10HW, 10H/220K, 10HA, 10HL, 10HP, 10W, 16A/10H, 16C/10H, 17H/10H, 18C/10H",
            position: DN
        },

        Node5: {
            NodeStop: "Botanical Garden",
            NodeRoutes: "10H/220K, 10HP, 10HW, 10W",
            position: UP
        },
    },

    "__Kondapur__": {
        Stop_Name: "Kondapur",

        Node1: {
            NodeStop: "Kothaguda X Roads",
            NodeRoutes: "6L/281",
            position: UP
        },

        Node2: {
            NodeStop: "Kondapur RTO",
            NodeRoutes: "10HA, 10HL, 216KL, 216MP, 221, 221G, 222L, 222A",
            position: UP
        },

        Node3: {
            NodeStop: "Kothaguda X Roads",
            NodeRoutes: "5K/125, 10H, 10HA, 10HL, 16A/10H, 16C/10H, 17H/10H, 18C/10H",
            position: DN
        },
    },

    "__Kondapur_RTO__": {
        Stop_Name: "Kondapur RTO",

        Node1: {
            NodeStop: "Hafeezpet",
            NodeRoutes: "10HA, 10HL, 216KL, 216MP, 221, 221G, 222L, 222A",
            position: UP
        },

        Node2: {
            NodeStop: "Kondapur",
            NodeRoutes: "10HA, 10HL, 216KL, 216MP, 221, 221G, 222L, 222A",
            position: DN
        },
    },

    "__Hafeezpet__": {
        Stop_Name: "Hafeezpet",

        Node1: {
            NodeStop: "Old Hafeezpet",
            NodeRoutes: "10HA, 10HL, 216KL, 216MP, 221, 221G, 222L, 222A",
            position: UP
        },

        Node2: {
            NodeStop: "Kondapur RTO",
            NodeRoutes: "10HA, 10HL, 216KL, 216MP, 221, 221G, 222L, 222A",
            position: DN
        },
    },

    "__Old_Hafeezpet__": {
        Stop_Name: "Old Hafeezpet",

        Node1: {
            NodeStop: "Allwyn X Roads",
            NodeRoutes: "10HA, 10HL, 216KL, 216MP, 221, 221G, 222L, 222A",
            position: UP
        },

        Node2: {
            NodeStop: "Hafeezpet",
            NodeRoutes: "10HA, 10HL, 216KL, 216MP, 221, 221G, 222L, 222A",
            position: DN
        },
    },

    "__Botanical_Garden__": {
        Stop_Name: "Botanical Garden",

        Node1: {
            NodeStop: "Anjayya Nagar",
            NodeRoutes: "10H/220K, 10HW, 10W",
            position: UP
        },

        Node2: {
            NodeStop: "Sri Ram Nagar (Kondapur)",
            NodeRoutes: "10HP",
            position: UP
        },

        Node3: {
            NodeStop: "Kothaguda X Roads",
            NodeRoutes: "10H/220K, 10HP, 10HW, 10W",
            position: DN
        },
    },

    "__Sri_Ram_Nagar_(Kondapur)__": {
        Stop_Name: "Sri Ram Nagar (Kondapur)",

        Node1: {
            NodeStop: "CHIREC",
            NodeRoutes: "10HP",
            position: UP
        },

        Node2: {
            NodeStop: "Botanical Garden",
            NodeRoutes: "10HP",
            position: DN
        },
    },

    "__CHIREC__": {
        Stop_Name: "CHIREC",

        Node1: {
            NodeStop: "Prem Nagar",
            NodeRoutes: "10HP",
            position: UP
        },

        Node2: {
            NodeStop: "Sri Ram Nagar (Kondapur)",
            NodeRoutes: "10HP",
            position: DN
        },
    },

    "__Prem_Nagar__": {
        Stop_Name: "Prem Nagar",

        Node1: {
            NodeStop: "CHIREC",
            NodeRoutes: "10HP",
            position: DN
        },
    },

    "__Anjayya_Nagar__": {
        Stop_Name: "Anjayya Nagar",

        Node1: {
            NodeStop: "Gachibowli X Roads",
            NodeRoutes: "10H/220K, 10HW, 10W",
            position: UP
        },

        Node2: {
            NodeStop: "Botanical Garden",
            NodeRoutes: "10H/220K, 10HW, 10W",
            position: DN
        },
    },

    "__Cyberabad_PS__": {
        Stop_Name: "Cyberabad PS",

        Node1: {
            NodeStop: "Telecom Nagar",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Raidurgam PS",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW",
            position: DN
        },
    },

    "__Raidurgam_PS__": {
        Stop_Name: "Raidurgam PS",

        Node1: {
            NodeStop: "Khajaguda X Roads",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW",
            position: DN
        },
    },

    "__Telecom_Nagar__": {
        Stop_Name: "Telecom Nagar",

        Node1: {
            NodeStop: "Gachibowli X Roads",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW",
            position: UP
        },

        Node2: {
            NodeStop: "Cyberabad PS",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW",
            position: DN
        },
    },

    "__Gachibowli_X_Roads__": {
        Stop_Name: "Gachibowli X Roads",

        Node1: {
            NodeStop: "Indira Nagar (GCBWLY)",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10H/220K, 10HW, 10W",
            position: UP
        },

        Node2: {
            NodeStop: "Telecom Nagar",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW",
            position: DN
        },

        Node3: {
            NodeStop: "Anjayya Nagar",
            NodeRoutes: "10H/220K, 10HW, 10W",
            position: DN
        },
    },

    "__Indira_Nagar_(GCBWLY)__": {
        Stop_Name: "Indira Nagar (GCBWLY)",

        Node1: {
            NodeStop: "Gachibowli DLF",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10H/220K, 10HW, 10W",
            position: UP
        },

        Node2: {
            NodeStop: "Gachibowli X Roads",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10H/220K, 10HW, 10W",
            position: DN
        },
    },

    "__Gachibowli_DLF__": {
        Stop_Name: "Gachibowli DLF",

        Node1: {
            NodeStop: "Infosys",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10H/220K, 10HW, 10W",
            position: UP
        },

        Node2: {
            NodeStop: "Indira Nagar (GCBWLY)",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10H/220K, 10HW, 10W",
            position: DN
        },
    },

    "__Infosys__": {
        Stop_Name: "Infosys",

        Node1: {
            NodeStop: "Wipro Circle",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10H/220K, 10HW, 10W",
            position: UP
        },

        Node2: {
            NodeStop: "Gachibowli DLF",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10H/220K, 10HW, 10W",
            position: DN
        },
    },

    "__Wipro_Circle__": {
        Stop_Name: "Wipro Circle",

        Node1: {
            NodeStop: "ICICI Junction",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10HW, 10W",
            position: UP
        },

        Node2: {
            NodeStop: "Q City",
            NodeRoutes: "10H/220K",
            position: UP
        },

        Node3: {
            NodeStop: "Infosys",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10H/220K, 10HW, 10W",
            position: DN
        },
    },

    "__Q_City__": {
        Stop_Name: "Q City",

        Node1: {
            NodeStop: "Gowli Dhoddi Village",
            NodeRoutes: "10H/220K",
            position: UP
        },

        Node2: {
            NodeStop: "Wipro Circle",
            NodeRoutes: "10H/220K",
            position: DN
        },
    },

    "__Gowli_Dhoddi_Village__": {
        Stop_Name: "Gowli Dhoddi Village",

        Node1: {
            NodeStop: "Gowli Dhoddi",
            NodeRoutes: "10H/220K",
            position: UP
        },

        Node2: {
            NodeStop: "Q City",
            NodeRoutes: "10H/220K",
            position: DN
        },
    },

    "__Gowli_Dhoddi__": {
        Stop_Name: "Gowli Dhoddi",

        Node1: {
            NodeStop: "Gopanpally X Roads",
            NodeRoutes: "10H/220K",
            position: UP
        },

        Node2: {
            NodeStop: "Gowli Dhoddi Village",
            NodeRoutes: "10H/220K",
            position: DN
        },
    },

    "__Gopanpally_X_Roads__": {
        Stop_Name: "Gopanpally X Roads",

        Node1: {
            NodeStop: "Tellapur",
            NodeRoutes: "10H/220K",
            position: UP
        },

        Node2: {
            NodeStop: "Gowli Dhoddi",
            NodeRoutes: "10H/220K",
            position: DN
        },
    },

    "__Tellapur__": {
        Stop_Name: "Tellapur",

        Node1: {
            NodeStop: "Osman Nagar",
            NodeRoutes: "10H/220K",
            position: UP
        },

        Node2: {
            NodeStop: "Gopanpally X Roads",
            NodeRoutes: "10H/220K",
            position: DN
        },
    },

    "__Osman_Nagar__": {
        Stop_Name: "Osman Nagar",

        Node1: {
            NodeStop: "Kollur",
            NodeRoutes: "10H/220K",
            position: UP
        },

        Node2: {
            NodeStop: "Tellapur",
            NodeRoutes: "10H/220K",
            position: DN
        },
    },

    "__Kollur__": {
        Stop_Name: "Kollur",

        Node1: {
            NodeStop: "Kollur 2BHK",
            NodeRoutes: "10H/220K",
            position: UP
        },

        Node2: {
            NodeStop: "Osman Nagar",
            NodeRoutes: "10H/220K",
            position: DN
        },
    },

    "__Kollur_2BHK__": {
        Stop_Name: "Kollur 2BHK",

        Node1: {
            NodeStop: "Kollur",
            NodeRoutes: "10H/220K",
            position: DN
        },
    },

    "__ICICI_Junction__": {
        Stop_Name: "ICICI Junction",

        Node1: {
            NodeStop: "Infotech",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10HW, 10W",
            position: UP
        },

        Node2: {
            NodeStop: "Wipro Circle",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10HW, 10W",
            position: DN
        },
    },

    "__Infotech__": {
        Stop_Name: "Infotech",

        Node1: {
            NodeStop: "Waverock",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10HW, 10W",
            position: UP
        },

        Node2: {
            NodeStop: "ICICI Junction",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10HW, 10W",
            position: DN
        },
    },

    "__Waverock__": {
        Stop_Name: "Waverock",

        Node1: {
            NodeStop: "Infotech",
            NodeRoutes: "5W, 6N/47W, 6NW, 6IW/252, 9YF/11W, 11W, 113YIW, 10HW, 10W",
            position: DN
        },
    },

    "__KCGT__": {
        Stop_Name: KCGT,

        Node1: {
            NodeStop: KCGS,
            NodeRoutes: "1X, 2, 2C, 2J, 2K, 2U, 2Z, 2Z/251, 3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3T, 3Y, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: KCGS,
            NodeRoutes: "3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3T, 3Y, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251, 3N/203N",
            position: DN
        }
    },

    "__KCGS__": {
        Stop_Name: KCGS,

        Node1: {
            NodeStop: "Nimboliadda",
            NodeRoutes: "2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: UP
        },

        Node2: {
            NodeStop: KCGX,
            NodeRoutes: "1X, 3, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3T, 3Y",
            position: DN
        },

        Node3: {
            NodeStop: "Barkatpura",
            NodeRoutes: "2, 2C, 2J, 2K, 2U, 2Z, 2Z/251, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251, 3N/203N",
            position: DN
        },


        Node4: {
            NodeStop: "Barkatpura",
            NodeRoutes: "2/25S, 3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3T, 3Y",
            position: UP
        },

        Node5: {
            NodeStop: "Nimboliadda",
            NodeRoutes: "3C, 3M",
            position: DN
        },

        Node6: {
            NodeStop: KCGX,
            NodeRoutes: "3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251, 3N/203N",
            position: UP
        },
    },

    "__Nimboliadda__": {
        Stop_Name: "Nimboliadda",

        Node1: {
            NodeStop: "Chaderghat X Roads",
            NodeRoutes: "2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: UP
        },

        Node2: {
            NodeStop: KCGS,
            NodeRoutes: "2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: DN
        },

        Node3: {
            NodeStop: KCGS,
            NodeRoutes: "2/25S, 3C, 3M",
            position: UP
        },

        Node4: {
            NodeStop: "Chaderghat X Roads",
            NodeRoutes: "3C, 3M",
            position: DN
        }
    },

    "__Chaderghat_X_Roads__": {
        Stop_Name: "Chaderghat X Roads",

        Node1: {
            NodeStop: CBS,
            NodeRoutes: "2, 2C, 2J, 2U, 2Z, 2Z/251",
            position: UP
        },

        Node2: {
            NodeStop: "Kacheguda Kamela",
            NodeRoutes: "1K, 2K",
            position: UP
        },

        Node3: {
            NodeStop: "Nimboliadda",
            NodeRoutes: "2, 2C, 2J, 2K, 2U, 2Z, 2Z/251",
            position: DN
        },

        Node4: {
            NodeStop: KOTI_W,
            NodeRoutes: "1, 1B, 1C, 1J, 1JL, 1JK, 1K, 1P, 1Z, 1Z/251, 1Z/539, 3K/95, 3K/251, 3K/252, 3KJ, 3KN/95, 3KN/251",
            position: DN
        },


        Node5: {
            NodeStop: KOTI_W,
            NodeRoutes: "1/25S, 1/25S/229, 1P/25S, 1Z/229, 3, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3N, 3T, 3Y",
            position: UP
        },

        Node6: {
            NodeStop: "Nimboliadda",
            NodeRoutes: "2/25S, 3C, 3M",
            position: UP
        },

        Node7: {
            NodeStop: CBS,
            NodeRoutes: "3C, 3M",
            position: DN
        }
    },

    "__Kacheguda_Kamela__": {
        Stop_Name: "Kacheguda Kamela",

        Node1: {
            NodeStop: "Kacheguda Depot",
            NodeRoutes: "1K, 2K",
            position: UP
        },

        Node2: {
            NodeStop: "Chaderghat X Roads",
            NodeRoutes: "1K, 2K",
            position: DN
        }
    },

    "__Kacheguda_Depot__": {
        Stop_Name: "Kacheguda Depot",

        Node1: {
            NodeStop: "Kacheguda Kamela",
            NodeRoutes: "1K, 2K",
            position: DN
        }
    },

    "__Vidya_Nagar__": {
        Stop_Name: "Vidya Nagar",

        Node1: {
            NodeStop: "Adikmet",
            NodeRoutes: "3, 3C, 3D, 3DN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node2: {
            NodeStop: "Andhra Mahila Sabha",
            NodeRoutes: "3H, 3HN",
            position: UP
        },

        Node3: {
            NodeStop: "Nallakunta",
            NodeRoutes: "3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node4: {
            NodeStop: "Nallakunta",
            NodeRoutes: "3K/6M, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6H, 6N/47W, 6NW",
            position: UP
        },

        Node5: {
            NodeStop: "Adikmet",
            NodeRoutes: "3K/6M, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6H, 6N/47W, 6NW, 6IW/252, 6X",
            position: DN
        },

        Node6: {
            NodeStop: "Ram Nagar Gundu",
            NodeRoutes: "6R, 6RK",
            position: DN
        },

        Node7: {
            NodeStop: "VST",
            NodeRoutes: "6X",
            position: UP
        },
    },

    "__Ram_Nagar_Gundu__": {
        Stop_Name: "Ram Nagar Gundu",

        Node1: {
            NodeStop: "Ram Nagar (E Seva)",
            NodeRoutes: "6R, 6RK, 6IW/252",
            position: UP
        },
    },


    "__Ram_Nagar_(E_Seva)__": {
        Stop_Name: "Ram Nagar (E Seva)",

        Node1: {
            NodeStop: "Ram Nagar",
            NodeRoutes: "6R, 6RK, 6IW/252",
            position: UP
        },
    },

    "__Ram_Nagar__": {
        Stop_Name: "Ram Nagar",

        Node1: {
            NodeStop: "VST",
            NodeRoutes: "6R, 6RK, 6IW/252",
            position: UP
        },
    },

    "__Andhra_Mahila_Sabha__": {
        Stop_Name: "Andhra Mahila Sabha",

        Node1: {
            NodeStop: "Library OU",
            NodeRoutes: "3H, 3HN",
            position: UP
        },

        Node2: {
            NodeStop: "Vidya Nagar",
            NodeRoutes: "3H, 3HN",
            position: DN
        },
    },

    "__Library_OU__": {
        Stop_Name: "Library OU",

        Node1: {
            NodeStop: "Ladies Hostel OU",
            NodeRoutes: "3H, 3HN",
            position: UP
        },

        Node2: {
            NodeStop: "Andhra Mahila Sabha",
            NodeRoutes: "3H, 3HN",
            position: DN
        },
    },

    "__Ladies_Hostel_OU__": {
        Stop_Name: "Ladies Hostel OU",

        Node1: {
            NodeStop: "Law College OU",
            NodeRoutes: "3H, 3HN",
            position: UP
        },

        Node2: {
            NodeStop: "Library OU",
            NodeRoutes: "3H, 3HN",
            position: DN
        },
    },

    "__Law_College_OU__": {
        Stop_Name: "Law College OU",

        Node1: {
            NodeStop: "Arts College OU",
            NodeRoutes: "3H, 3HN",
            position: UP
        },

        Node2: {
            NodeStop: "Ladies Hostel OU",
            NodeRoutes: "3H, 3HN",
            position: DN
        },
    },

    "__Arts_College_OU__": {
        Stop_Name: "Arts College OU",

        Node1: {
            NodeStop: "Tarnaka",
            NodeRoutes: "3H, 3HN",
            position: UP
        },

        Node2: {
            NodeStop: "Law College OU",
            NodeRoutes: "3H, 3HN",
            position: DN
        },
    },

    "__Adikmet__": {
        Stop_Name: "Adikmet",

        Node1: {
            NodeStop: "Ladies Hostel",
            NodeRoutes: "3, 3C, 3D, 3DN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node2: {
            NodeStop: "Vidya Nagar",
            NodeRoutes: "3, 3C, 3D, 3DN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Vidya Nagar",
            NodeRoutes: "3K/6M, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6H, 6N/47W, 6NW, 6X",
            position: UP
        },

        Node4: {
            NodeStop: "Ladies Hostel",
            NodeRoutes: "3K/6M, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6H, 6N/47W, 6NW, 6IW/252, 6X",
            position: DN
        },

        Node5: {
            NodeStop: "Ram Nagar Gundu",
            NodeRoutes: "6IW/252",
            position: UP
        },
    },

    "__Ladies_Hostel__": {
        Stop_Name: "Ladies Hostel",

        Node1: {
            NodeStop: "Manikeshwar Nagar",
            NodeRoutes: "3, 3C, 3D, 3DN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node2: {
            NodeStop: "Adikmet",
            NodeRoutes: "3, 3C, 3D, 3DN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Adikmet",
            NodeRoutes: "3K/6M, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6H, 6N/47W, 6NW, 6IW/252, 6X",
            position: UP
        },

        Node4: {
            NodeStop: "Manikeshwar Nagar",
            NodeRoutes: "3K/6M, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6H, 6N/47W, 6NW, 6IW/252, 6X",
            position: DN
        },
    },

    "__Manikeshwar_Nagar__": {
        Stop_Name: "Manikeshwar Nagar",

        Node1: {
            NodeStop: "Tarnaka",
            NodeRoutes: "3, 3C, 3D, 3DN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node2: {
            NodeStop: "Ladies Hostel",
            NodeRoutes: "3, 3C, 3D, 3DN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Ladies Hostel",
            NodeRoutes: "3K/6M, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6H, 6N/47W, 6NW, 6IW/252, 6X",
            position: UP
        },

        Node4: {
            NodeStop: "Tarnaka",
            NodeRoutes: "3K/6M, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6H, 6N/47W, 6NW, 6IW/252, 6X",
            position: DN
        },
    },

    "__Tarnaka__": {
        Stop_Name: "Tarnaka",

        Node1: {
            NodeStop: "White House",
            NodeRoutes: "3, 3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3L, 3M, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node2: {
            NodeStop: "Habsiguda",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252, 3N, 3K/90L",
            position: UP
        },

        Node3: {
            NodeStop: "Manikeshwar Nagar",
            NodeRoutes: "3, 3C, 3D, 3DN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3KN/252, 3L, 3M, 3N, 3T, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node4: {
            NodeStop: "Arts College OU",
            NodeRoutes: "3H, 3HN",
            position: DN
        },

        Node5: {
            NodeStop: "Manikeshwar Nagar",
            NodeRoutes: "3K/6M, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6H, 6N/47W, 6NW, 6IW/252, 6X",
            position: UP
        },

        Node6: {
            NodeStop: "White House",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H",
            position: DN
        },

        Node7: {
            NodeStop: "Habsiguda",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6N/47W, 6NW, 6IW/252, 6X",
            position: DN
        },

    },

    "__White_House__": {
        Stop_Name: "White House",

        Node1: {
            NodeStop: "Lalapet Kaman",
            NodeRoutes: "3, 3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3L, 3M, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: UP
        },

        Node2: {
            NodeStop: "Tarnaka",
            NodeRoutes: "3, 3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3L, 3M, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Lalapet Kaman",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H",
            position: DN
        },

        Node4: {
            NodeStop: "Tarnaka",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H",
            position: UP
        },
    },

    "__Lalapet_Kaman__": {
        Stop_Name: "Lalapet Kaman",

        Node1: {
            NodeStop: "Lalapet",
            NodeRoutes: "3, 3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3L, 3M, 3Y, 6M/3K, 6M/3KN, 6L/281, 14P, 14PX, 15, 15D, 15H, 15H/242RG",
            position: UP
        },

        Node2: {
            NodeStop: "White House",
            NodeRoutes: "3, 3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3L, 3M, 3Y, 6M/3K, 6M/3KN, 6L/281",
            position: DN
        },

        Node3: {
            NodeStop: "Lalapet",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H, 15H/20, 15D/20",
            position: DN
        },

        Node4: {
            NodeStop: "White House",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H",
            position: UP
        },

        Node5: {
            NodeStop: "Shanthi Nagar",
            NodeRoutes: "14P, 14PX, 15, 15D, 15H, 15H/242RG",
            position: DN
        },

        Node6: {
            NodeStop: "Shanthi Nagar",
            NodeRoutes: "16PX, 15H/20, 15D/20",
            position: UP
        },
    },

    "__Lalapet__": {
        Stop_Name: "Lalapet",

        Node1: {
            NodeStop: "Industrial Estate",
            NodeRoutes: "3, 3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3M, 3Y, 6M/3K, 6M/3KN, 6L/281, 15, 15D, 15H, 15H/242RG",
            position: UP
        },

        Node2: {
            NodeStop: "Prashanth Nagar",
            NodeRoutes: "3L, 14P, 14PX",
            position: UP
        },

        Node3: {
            NodeStop: "Lalapet Kaman",
            NodeRoutes: "3, 3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3L, 3M, 3Y, 6M/3K, 6M/3KN, 6L/281, 14P, 14PX, 15, 15D, 15H, 15H/242RG",
            position: DN
        },

        Node4: {
            NodeStop: "Industrial Estate",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H, 15H/20, 15D/20",
            position: DN
        },

        Node5: {
            NodeStop: "Lalapet Kaman",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H, 15H/20, 15D/20, 16PX",
            position: UP
        },
    },

    "__Prashanth_Nagar__": {
        Stop_Name: "Prashanth Nagar",

        Node1: {
            NodeStop: "Lalapet",
            NodeRoutes: "3L, 14P",
            position: DN
        },

        Node2: {
            NodeStop: "Sardar Patel Nagar",
            NodeRoutes: "16P",
            position: DN
        },

        Node3: {
            NodeStop: "Lalapet",
            NodeRoutes: "16PX",
            position: UP
        },

        Node4: {
            NodeStop: "Sardar Patel Nagar",
            NodeRoutes: "14PX",
            position: UP
        },

    },

    "__Industrial_Estate__": {
        Stop_Name: "Industrial Estate",

        Node1: {
            NodeStop: "ZTS X Roads",
            NodeRoutes: "3, 3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3M, 3Y, 6M/3K, 6M/3KN, 6L/281, 15, 15D, 15H, 15H/242RG",
            position: UP
        },

        Node2: {
            NodeStop: "Lalapet",
            NodeRoutes: "3, 3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3M, 3Y, 6M/3K, 6M/3KN, 6L/281, 15, 15D, 15H, 15H/242RG",
            position: DN
        },

        Node3: {
            NodeStop: "ZTS X Roads",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H, 15H/20, 15D/20",
            position: DN
        },

        Node4: {
            NodeStop: "Lalapet",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H, 15H/20, 15D/20",
            position: UP
        },
    },

    "__ZTS_X_Roads__": {
        Stop_Name: "ZTS X Roads",

        Node1: {
            NodeStop: "Carbon",
            NodeRoutes: "3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3Y, 6M/3K, 6M/3KN, 6L/281, 15D, 15H, 15H/242RG, 16H",
            position: UP
        },

        Node2: {
            NodeStop: "Moula Ali Kaman",
            NodeRoutes: "3, 15",
            position: UP
        },

        Node3: {
            NodeStop: "Tirumala Nagar",
            NodeRoutes: "3M, 16H/47L, 16H/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Industrial Estate",
            NodeRoutes: "3, 3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3M, 3Y, 6M/3K, 6M/3KN, 6L/281, 15, 15D, 15H, 15H/242RG",
            position: DN
        },

        Node5: {
            NodeStop: "Carbon",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: DN
        },

        Node6: {
            NodeStop: "Industrial Estate",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H, 15H/20, 15D/20",
            position: UP
        },

        Node7: {
            NodeStop: "Tirumala Nagar",
            NodeRoutes: "16H",
            position: DN
        },
    },

    "__Carbon__": {
        Stop_Name: "Carbon",

        Node1: {
            NodeStop: "HB Colony",
            NodeRoutes: "3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3Y, 6M/3K, 6M/3KN, 6L/281, 15D, 15H, 15H/242RG, 16H",
            position: UP
        },

        Node2: {
            NodeStop: "ZTS X Roads",
            NodeRoutes: "3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3Y, 6M/3K, 6M/3KN, 6L/281, 15D, 15H, 15H/242RG, 16H",
            position: DN
        },

        Node3: {
            NodeStop: "HB Colony",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: DN
        },

        Node4: {
            NodeStop: "ZTS X Roads",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: UP
        },
    },

    "__HB_Colony__": {
        Stop_Name: "HB Colony",

        Node1: {
            NodeStop: "Vasundara College",
            NodeRoutes: "3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15D, 15H, 15H/242RG, 16H",
            position: UP
        },

        Node2: {
            NodeStop: "Carbon",
            NodeRoutes: "3C, 3D, 3H, 3K, 3K/242, 3K/281, 3KC, 3Y, 6M/3K, 6M/3KN, 6L/281, 15D, 15H, 15H/242RG, 16H",
            position: DN
        },

        Node3: {
            NodeStop: "Noma",
            NodeRoutes: "3DN, 3HN, 3KN",
            position: DN
        },

        Node4: {
            NodeStop: "Vasundara College",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: DN
        },

        Node5: {
            NodeStop: "Carbon",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 6H, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: UP
        },

        Node6: {
            NodeStop: "Noma",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 6N/47W, 6NW",
            position: UP
        },

    },

    "__Vasundara_College__": {
        Stop_Name: "Vasundara College",

        Node1: {
            NodeStop: "Indira Nagar (MLY)",
            NodeRoutes: "3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15D, 15H, 15H/242RG, 16H",
            position: UP
        },

        Node2: {
            NodeStop: "HB Colony",
            NodeRoutes: "3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15D, 15H, 15H/242RG, 16H",
            position: DN
        },

        Node3: {
            NodeStop: "HB Colony",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Indira Nagar (MLY)",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: DN
        },
    },

    "__Indira_Nagar_(MLY)__": {
        Stop_Name: "Indira Nagar (MLY)",

        Node1: {
            NodeStop: "Laxmi Nagar (MLY)",
            NodeRoutes: "3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15D, 15H, 15H/242RG, 16H",
            position: UP
        },

        Node2: {
            NodeStop: "Vasundara College",
            NodeRoutes: "3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15D, 15H, 15H/242RG, 16H",
            position: DN
        },

        Node3: {
            NodeStop: "Vasundara College",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Laxmi Nagar (MLY)",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: DN
        },
    },

    "__Laxmi_Nagar_(MLY)__": {
        Stop_Name: "Laxmi Nagar (MLY)",

        Node1: {
            NodeStop: "Moula Ali",
            NodeRoutes: "3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15D, 15H, 15H/242RG, 16H",
            position: UP
        },

        Node2: {
            NodeStop: "Indira Nagar (MLY)",
            NodeRoutes: "3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15D, 15H, 15H/242RG, 16H",
            position: DN
        },

        Node3: {
            NodeStop: "Indira Nagar (MLY)",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Moula Ali",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: DN
        },
    },

    "__Moula_Ali__": {
        Stop_Name: "Moula Ali",

        Node1: {
            NodeStop: "SP Nagar",
            NodeRoutes: "3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15, 15D, 15H, 15H/242RG, 16H",
            position: UP
        },

        Node2: {
            NodeStop: "Laxmi Nagar (MLY)",
            NodeRoutes: "3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15D, 15H, 15H/242RG, 16H",
            position: DN
        },

        Node3: {
            NodeStop: "Moula Ali Kaman",
            NodeRoutes: "3, 15",
            position: DN
        },

        Node4: {
            NodeStop: "Laxmi Nagar (MLY)",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: UP
        },

        Node5: {
            NodeStop: "SP Nagar",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: DN
        },
    },

    "__Moula_Ali_Kaman__": {
        Stop_Name: "Moula Ali Kaman",

        Node1: {
            NodeStop: "Moula Ali",
            NodeRoutes: "3, 15",
            position: UP
        },

        Node2: {
            NodeStop: "ZTS X Roads",
            NodeRoutes: "3, 15",
            position: DN
        },
    },

    "__SP_Nagar__": {
        Stop_Name: "SP Nagar",

        Node1: {
            NodeStop: "ECIL DAE Colony",
            NodeRoutes: "3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15, 15D, 15H, 15H/242RG, 16H",
            position: UP
        },

        Node2: {
            NodeStop: "Moula Ali",
            NodeRoutes: "3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15, 15D, 15H, 15H/242RG, 16H",
            position: DN
        },

        Node3: {
            NodeStop: "Moula Ali",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: UP
        },

        Node4: {
            NodeStop: "ECIL DAE Colony",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: DN
        },
    },

    "__ECIL_DAE_Colony__": {
        Stop_Name: "ECIL DAE Colony",

        Node1: {
            NodeStop: ECILX,
            NodeRoutes: "3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15, 15D, 15H, 15H/242RG, 16H",
            position: UP
        },

        Node2: {
            NodeStop: "SP Nagar",
            NodeRoutes: "3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15, 15D, 15H, 15H/242RG, 16H",
            position: DN
        },

        Node3: {
            NodeStop: "SP Nagar",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: UP
        },

        Node4: {
            NodeStop: ECILX,
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: DN
        },
    },

    "__ECILX__": {
        Stop_Name: ECILX,

        Node1: {
            NodeStop: "Kushaiguda",
            NodeRoutes: "3, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KN, 15, 15D, 15H, 15H/242RG, 16A/281R, 16C/281, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: "North Kamala Nagar",
            NodeRoutes: "3Y, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16ES, 16R/20",
            position: UP
        },

        Node3: {
            NodeStop: "ECIL Company",
            NodeRoutes: "3KC, 16AC",
            position: UP
        },

        Node4: {
            NodeStop: "ECIL DAE Colony",
            NodeRoutes: "3K/6M, 3K/90L, 3K/95, 3K/102, 3K/102B, 3K/203N, 3K/251, 3K/252, 3KJ, 3KN/6M, 3KN/95, 3KN/251, 6H, 6NW, 6N/47W, 15H/20, 15D/20, 16H/47L, 16H/49M",
            position: UP
        },

        Node5: {
            NodeStop: "ECIL DAE Colony",
            NodeRoutes: "3, 3C, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KC, 3KN, 3Y, 6M/3K, 6M/3KN, 6L/281, 15, 15D, 15H, 15H/242RG, 16H",
            position: DN
        },

        Node6: {
            NodeStop: "Kushaiguda",
            NodeRoutes: "3K/251, 3KN/251, 15H/20, 15D/20",
            position: DN
        },

        Node7: {
            NodeStop: "North Kamala Nagar",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16CR",
            position: DN
        },
    },

    "__ECIL_Company__": {
        Stop_Name: "ECIL Company",

        Node1: {
            NodeStop: "NFC Gate",
            NodeRoutes: "3KC, 16AC",
            position: UP
        },

        Node2: {
            NodeStop: ECILX,
            NodeRoutes: "3KC, 16AC",
            position: DN
        }
    },


    "__NFC_Gate__": {
        Stop_Name: "NFC Gate",

        Node1: {
            NodeStop: "HCL X Roads",
            NodeRoutes: "3KC, 16AC",
            position: UP
        },

        Node2: {
            NodeStop: "ECIL Company",
            NodeRoutes: "3KC, 16AC",
            position: DN
        }
    },

    "__Habsiguda__": {
        Stop_Name: "Habsiguda",

        Node1: {
            NodeStop: "HMT Nagar",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252, 3N",
            position: UP
        },

        Node2: {
            NodeStop: "Tarnaka",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252, 3N, 3K/90L",
            position: DN
        },

        Node3: {
            NodeStop: "Tarnaka",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6N/47W, 6NW, 6IW/252, 6X",
            position: UP
        },

        Node4: {
            NodeStop: "HMT Nagar",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6N/47W, 6NW, 6IW/252, 6X",
            position: DN
        },

        Node5: {
            NodeStop: "NGRI",
            NodeRoutes: "3K/90L",
            position: UP
        },
    },

    "__NGRI__": {
        Stop_Name: "NGRI",

        Node1: {
            NodeStop: "Survey Of India",
            NodeRoutes: "3K/90L",
            position: UP
        },

        Node2: {
            NodeStop: "Habsiguda",
            NodeRoutes: "3K/90L",
            position: DN
        },

    },

    "__Survey_Of_India__": {
        Stop_Name: "Survey Of India",

        Node1: {
            NodeStop: "Uppal Ring Road",
            NodeRoutes: "3K/90L",
            position: UP
        },

        Node2: {
            NodeStop: "NGRI",
            NodeRoutes: "3K/90L",
            position: DN
        },
    },

    "__Uppal_Ring_Road__": {
        Stop_Name: "Uppal Ring Road",

        Node1: {
            NodeStop: "Nagole Metro Station",
            NodeRoutes: "3K/90L",
            position: UP
        },

        Node2: {
            NodeStop: "Survey Of India",
            NodeRoutes: "3K/90L",
            position: DN
        },
    },

    "__Nagole_Metro_Station__": {
        Stop_Name: "Nagole Metro Station",

        Node1: {
            NodeStop: "Nagole X Roads",
            NodeRoutes: "3K/90L",
            position: UP
        },

        Node2: {
            NodeStop: "Uppal Ring Road",
            NodeRoutes: "3K/90L",
            position: DN
        },
    },

    "__Nagole_X_Roads__": {
        Stop_Name: "Nagole X Roads",

        Node1: {
            NodeStop: "Alkapuri",
            NodeRoutes: "3K/90L",
            position: UP
        },

        Node2: {
            NodeStop: "Nagole Metro Station",
            NodeRoutes: "3K/90L",
            position: DN
        },
    },

    "__Alkapuri__": {
        Stop_Name: "Alkapuri",

        Node1: {
            NodeStop: "Rajiv Gandhi Nagar",
            NodeRoutes: "3K/90L",
            position: UP
        },

        Node2: {
            NodeStop: "Nagole X Roads",
            NodeRoutes: "3K/90L",
            position: DN
        },
    },

    "__Rajiv_Gandhi_Nagar__": {
        Stop_Name: "Rajiv Gandhi Nagar",

        Node1: {
            NodeStop: "Kamineni Hospitals",
            NodeRoutes: "3K/90L",
            position: UP
        },

        Node2: {
            NodeStop: "Alkapuri",
            NodeRoutes: "3K/90L",
            position: DN
        },
    },

    "__Kamineni_Hospitals__": {
        Stop_Name: "Kamineni Hospitals",

        Node1: {
            NodeStop: "LB Nagar",
            NodeRoutes: "3K/90L",
            position: UP
        },

        Node2: {
            NodeStop: "Rajiv Gandhi Nagar",
            NodeRoutes: "3K/90L",
            position: DN
        },
    },

    "__Sagar_Ring_Road__": {
        Stop_Name: "Sagar Ring Road",

        Node1: {
            NodeStop: "TKR Kaman",
            NodeRoutes: "3K/90L",
            position: UP
        },

        Node2: {
            NodeStop: "LB Nagar",
            NodeRoutes: "3K/90L",
            position: DN
        },
    },

    "__TKR_Kaman__": {
        Stop_Name: "TKR Kaman",

        Node1: {
            NodeStop: "Gayathri Nagar",
            NodeRoutes: "3K/90L",
            position: UP
        },

        Node2: {
            NodeStop: "Sagar Ring Road",
            NodeRoutes: "3K/90L",
            position: DN
        },
    },

    "__Gayathri_Nagar__": {
        Stop_Name: "Gayathri Nagar",

        Node1: {
            NodeStop: "Manda Mallamma",
            NodeRoutes: "3K/90L",
            position: UP
        },

        Node2: {
            NodeStop: "TKR Kaman",
            NodeRoutes: "3K/90L",
            position: DN
        },
    },

    "__Manda_Mallamma__": {
        Stop_Name: "Manda Mallamma",

        Node1: {
            NodeStop: "Owaisi Hospital",
            NodeRoutes: "3K/90L",
            position: UP
        },

        Node2: {
            NodeStop: "Gayathri Nagar",
            NodeRoutes: "3K/90L",
            position: DN
        },
    },

    "__Owaisi_Hospital__": {
        Stop_Name: "Owaisi Hospital",

        Node1: {
            NodeStop: "Paisal Banda",
            NodeRoutes: "3K/90L, 3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: UP
        },

        Node2: {
            NodeStop: "Manda Mallamma",
            NodeRoutes: "3K/90L",
            position: DN
        },

        Node3: {
            NodeStop: "Santhosh Nagar",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: DN
        },
    },

    "__Paisal_Banda__": {
        Stop_Name: "Paisal Banda",

        Node1: {
            NodeStop: "BDL",
            NodeRoutes: "3K/90L, 3K/102, 9K/102",
            position: UP
        },

        Node2: {
            NodeStop: "Midhani Company",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: UP
        },

        Node3: {
            NodeStop: "Owaisi Hospital",
            NodeRoutes: "3K/90L, 3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: DN
        },
    },

    "__BDL__": {
        Stop_Name: "BDL",

        Node1: {
            NodeStop: "Paisal Banda",
            NodeRoutes: "3K/90L, 3K/102, 9K/102",
            position: DN
        },
    },

    "__Midhani_Company__": {
        Stop_Name: "Midhani Company",

        Node1: {
            NodeStop: "Dhatu Nagar",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Paisal Banda",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: DN
        },
    },

    "__Dhatu_Nagar__": {
        Stop_Name: "Dhatu Nagar",

        Node1: {
            NodeStop: "Midhani Township",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Midhani Company",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: DN
        },
    },

    "__Midhani_Township__": {
        Stop_Name: "Midhani Township",

        Node1: {
            NodeStop: "Balapur X Roads",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Dhatu Nagar",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: DN
        },
    },

    "__Balapur_X_Roads__": {
        Stop_Name: "Balapur X Roads",

        Node1: {
            NodeStop: "Lenin Nagar",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Midhani Township",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: DN
        },
    },

    "__Lenin_Nagar__": {
        Stop_Name: "Lenin Nagar",

        Node1: {
            NodeStop: "Udyog Nagar",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Balapur X Roads",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: DN
        },
    },

    "__Udyog_Nagar__": {
        Stop_Name: "Udyog Nagar",

        Node1: {
            NodeStop: "Badangpet",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Lenin Nagar",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: DN
        },
    },

    "__Badangpet__": {
        Stop_Name: "Badangpet",

        Node1: {
            NodeStop: "Badangpet Village",
            NodeRoutes: "3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Udyog Nagar",
            NodeRoutes: "3K/102B, 3K/203N, 3N/203N",
            position: DN
        },
    },

    "__Badangpet_Village__": {
        Stop_Name: "Badangpet Village",

        Node1: {
            NodeStop: "Pedha Bhavi - Badangpet",
            NodeRoutes: "3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Badangpet",
            NodeRoutes: "3K/203N, 3N/203N",
            position: DN
        },
    },

    "__Pedha_Bhavi_Badangpet__": {
        Stop_Name: "Pedha Bhavi - Badangpet",

        Node1: {
            NodeStop: "Anjaneya Tower",
            NodeRoutes: "3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Badangpet Village",
            NodeRoutes: "3K/203N, 3N/203N",
            position: DN
        },
    },

    "__Anjaneya_Tower__": {
        Stop_Name: "Anjaneya Tower",

        Node1: {
            NodeStop: "Gandhi Nagar (BDGPT)",
            NodeRoutes: "3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Pedha Bhavi - Badangpet",
            NodeRoutes: "3K/203N, 3N/203N",
            position: DN
        },
    },

    "__Gandhi_Nagar_(BDGPT)__": {
        Stop_Name: "Gandhi Nagar (BDGPT)",

        Node1: {
            NodeStop: "Sri Nilaya Township",
            NodeRoutes: "3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Anjaneya Tower",
            NodeRoutes: "3K/203N, 3N/203N",
            position: DN
        },
    },

    "__Sri_Nilaya_Township__": {
        Stop_Name: "Sri Nilaya Township",

        Node1: {
            NodeStop: "MVSR Engineering College",
            NodeRoutes: "3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Gandhi Nagar (BDGPT)",
            NodeRoutes: "3K/203N, 3N/203N",
            position: DN
        },
    },

    "__MVSR_Engineering_College__": {
        Stop_Name: "MVSR Engineering College",

        Node1: {
            NodeStop: "Green Homes Colony",
            NodeRoutes: "3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "Sri Nilaya Township",
            NodeRoutes: "3K/203N, 3N/203N",
            position: DN
        },
    },

    "__Green_Homes_Colony__": {
        Stop_Name: "Green Homes Colony",

        Node1: {
            NodeStop: "Nadergul",
            NodeRoutes: "3K/203N, 3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "MVSR Engineering College",
            NodeRoutes: "3K/203N, 3N/203N",
            position: DN
        },
    },

    "Nadergul": {
        Stop_Name: "Nadergul",

        Node1: {
            NodeStop: "Green Homes Colony",
            NodeRoutes: "3K/203N, 3N/203N",
            position: DN
        },
    },

    "__HMT_Nagar__": {
        Stop_Name: "HMT Nagar",

        Node1: {
            NodeStop: "Nacharam",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252, 3N",
            position: UP
        },

        Node2: {
            NodeStop: "Habsiguda",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252, 3N",
            position: DN
        },

        Node3: {
            NodeStop: "Habsiguda",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6N/47W, 6NW, 6IW/252, 6X",
            position: UP
        },

        Node4: {
            NodeStop: "Nacharam",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6N/47W, 6NW, 6IW/252, 6X",
            position: DN
        },
    },

    "__Nacharam__": {
        Stop_Name: "Nacharam",

        Node1: {
            NodeStop: "Nacharam ESI",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252, 3N",
            position: UP
        },

        Node2: {
            NodeStop: "HMT Nagar",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252, 3N",
            position: DN
        },

        Node3: {
            NodeStop: "HMT Nagar",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6N/47W, 6NW, 6IW/252, 6X",
            position: UP
        },

        Node4: {
            NodeStop: "Nacharam ESI",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6N/47W, 6NW, 6IW/252, 6X",
            position: DN
        },
    },

    "__Nacharam_ESI__": {
        Stop_Name: "Nacharam ESI",

        Node1: {
            NodeStop: "Nacharam X Roads",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252, 3N",
            position: UP
        },

        Node2: {
            NodeStop: "Nacharam",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252, 3N",
            position: DN
        },

        Node3: {
            NodeStop: "Nacharam",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6N/47W, 6NW, 6IW/252, 6X",
            position: UP
        },

        Node4: {
            NodeStop: "Nacharam X Roads",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6N/47W, 6NW, 6IW/252, 6X",
            position: DN
        },
    },

    "__Nacharam_X_Roads__": {
        Stop_Name: "Nacharam X Roads",

        Node1: {
            NodeStop: "Delhi Tubes",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252",
            position: UP
        },

        Node2: {
            NodeStop: "Nacharam IDA",
            NodeRoutes: "3N",
            position: UP
        },

        Node3: {
            NodeStop: "Nacharam ESI",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252, 3N",
            position: DN
        },

        Node4: {
            NodeStop: "Nacharam ESI",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 3N/203N, 6N/47W, 6NW, 6IW/252, 6X",
            position: UP
        },

        Node5: {
            NodeStop: "Delhi Tubes",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 6N/47W, 6NW, 6IW/252, 6X",
            position: DN
        },

        Node6: {
            NodeStop: "Nacharam IDA",
            NodeRoutes: "3N/203N",
            position: DN
        },
    },

    "__Nacharam_IDA__": {
        Stop_Name: "Nacharam IDA",

        Node1: {
            NodeStop: "AP Foods",
            NodeRoutes: "3N",
            position: UP
        },

        Node2: {
            NodeStop: "Nacharam X Roads",
            NodeRoutes: "3N",
            position: DN
        },

        Node3: {
            NodeStop: "Nacharam X Roads",
            NodeRoutes: "3N/203N",
            position: UP
        },

        Node4: {
            NodeStop: "BEL Circle",
            NodeRoutes: "3N/203N",
            position: DN
        },
    },

    "__BEL__": {
        Stop_Name: "BEL",

        Node1: {
            NodeStop: "BEL Circle",
            NodeRoutes: "3N/203N",
            position: UP
        }
    },

    "__BEL_Circle__": {
        Stop_Name: "BEL Circle",

        Node1: {
            NodeStop: "Nacharam IDA",
            NodeRoutes: "3N/203N",
            position: UP
        },

        Node2: {
            NodeStop: "BEL",
            NodeRoutes: "3N/203N",
            position: DN
        },
    },

    "__AP_Foods__": {
        Stop_Name: "AP Foods",

        Node1: {
            NodeStop: "Chilka Nagar",
            NodeRoutes: "3N",
            position: UP
        },

        Node2: {
            NodeStop: "Nacharam IDA",
            NodeRoutes: "3N",
            position: DN
        }
    },

    "__Chilka_Nagar__": {
        Stop_Name: "Chilka Nagar",

        Node1: {
            NodeStop: "Hema Nagar",
            NodeRoutes: "3N",
            position: UP
        },

        Node2: {
            NodeStop: "AP Foods",
            NodeRoutes: "3N",
            position: DN
        }
    },

    "__Hema_Nagar__": {
        Stop_Name: "Hema Nagar",

        Node2: {
            NodeStop: "Chilka Nagar",
            NodeRoutes: "3N",
            position: DN
        }
    },

    "__Delhi_Tubes__": {
        Stop_Name: "Delhi Tubes",

        Node1: {
            NodeStop: "Janapriya",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252",
            position: UP
        },

        Node2: {
            NodeStop: "Nacharam X Roads",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252",
            position: DN
        },

        Node3: {
            NodeStop: "Nacharam X Roads",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 6N/47W, 6NW, 6IW/252, 6X",
            position: UP
        },

        Node4: {
            NodeStop: "Janapriya",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 6N/47W, 6NW, 6IW/252, 6X",
            position: DN
        },
    },

    "__Janapriya__": {
        Stop_Name: "Janapriya",

        Node1: {
            NodeStop: "Mallapur",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252",
            position: UP
        },

        Node2: {
            NodeStop: "Delhi Tubes",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252",
            position: DN
        },

        Node3: {
            NodeStop: "Delhi Tubes",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 6N/47W, 6NW, 6IW/252, 6X",
            position: UP
        },

        Node4: {
            NodeStop: "Mallapur",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 6N/47W, 6NW, 6IW/252, 6X",
            position: DN
        },
    },

    "__Mallapur__": {
        Stop_Name: "Mallapur",

        Node1: {
            NodeStop: "Noma",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252",
            position: UP
        },

        Node2: {
            NodeStop: "Janapriya",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252",
            position: DN
        },

        Node3: {
            NodeStop: "Janapriya",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 6N/47W, 6NW, 6IW/252, 6X",
            position: UP
        },

        Node4: {
            NodeStop: "Noma",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 6N/47W, 6NW, 6IW/252, 6X",
            position: DN
        },
    },

    "__Noma__": {
        Stop_Name: "Noma",

        Node1: {
            NodeStop: "HB Colony",
            NodeRoutes: "3DN, 3HN, 3KN",
            position: UP
        },

        Node2: {
            NodeStop: "NFC X Roads",
            NodeRoutes: "3KN/252",
            position: UP
        },

        Node3: {
            NodeStop: "Mallapur",
            NodeRoutes: "3DN, 3HN, 3KN, 3KN/252",
            position: DN
        },

        Node4: {
            NodeStop: "Mallapur",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 6N/47W, 6NW, 6IW/252, 6X",
            position: UP
        },

        Node5: {
            NodeStop: "HB Colony",
            NodeRoutes: "3KN/6M, 3KN/95, 3KN/251, 6N/47W, 6NW",
            position: DN
        },

        Node6: {
            NodeStop: "NFC X Roads",
            NodeRoutes: "6IW/252",
            position: DN
        },

        Node7: {
            NodeStop: "Shakthi Sai Nagar Kaman",
            NodeRoutes: "6X",
            position: DN
        },
    },

    "__NFC_X_Roads__": {
        Stop_Name: "NFC X Roads",

        Node1: {
            NodeStop: "Ashok Nagar (NFC)",
            NodeRoutes: "3KN/252",
            position: UP
        },

        Node2: {
            NodeStop: "Noma",
            NodeRoutes: "3KN/252",
            position: DN
        },

        Node3: {
            NodeStop: "Noma",
            NodeRoutes: "6IW/252",
            position: UP
        },

        Node4: {
            NodeStop: "Ashok Nagar (NFC)",
            NodeRoutes: "6IW/252",
            position: DN
        },
    },

    "__Ashok_Nagar_(NFC)__": {
        Stop_Name: "Ashok Nagar (NFC)",

        Node1: {
            NodeStop: "HCL X Roads",
            NodeRoutes: "3KN/252",
            position: UP
        },

        Node2: {
            NodeStop: "NFC X Roads",
            NodeRoutes: "3KN/252",
            position: DN
        },

        Node3: {
            NodeStop: "NFC X Roads",
            NodeRoutes: "6IW/252",
            position: UP
        },

        Node4: {
            NodeStop: "HCL X Roads",
            NodeRoutes: "6IW/252",
            position: DN
        },
    },

    "__HCL_X_Roads__": {
        Stop_Name: "HCL X Roads",

        Node1: {
            NodeStop: "HCL Phase 1",
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: UP
        },

        Node2: {
            NodeStop: "Ashok Nagar (NFC)",
            NodeRoutes: "3KN/252",
            position: DN
        },

        Node3: {
            NodeStop: "NFC Gate",
            NodeRoutes: "3KC, 16AC",
            position: DN
        },

        Node4: {
            NodeStop: "Ashok Nagar (NFC)",
            NodeRoutes: "6IW/252",
            position: UP
        },

        Node5: {
            NodeStop: "HCL Phase 1",
            NodeRoutes: "6IW/252",
            position: DN
        },
    },

    "__HCL_Phase_1__": {
        Stop_Name: "HCL Phase 1",

        Node1: {
            NodeStop: "HCL Colony",
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: UP
        },

        Node2: {
            NodeStop: "HCL X Roads",
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: DN
        },

        Node3: {
            NodeStop: "HCL X Roads",
            NodeRoutes: "6IW/252",
            position: UP
        },

        Node4: {
            NodeStop: "HCL Colony",
            NodeRoutes: "6IW/252",
            position: DN
        },
    },

    "__HCL_Colony__": {
        Stop_Name: "HCL Colony",

        Node1: {
            NodeStop: "Ganesh Temple Kaman",
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: UP
        },

        Node2: {
            NodeStop: "HCL Phase 1",
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: DN
        },

        Node3: {
            NodeStop: "HCL Phase 1",
            NodeRoutes: "6IW/252",
            position: UP
        },

        Node4: {
            NodeStop: "Ganesh Temple Kaman",
            NodeRoutes: "6IW/252",
            position: DN
        },
    },

    "__Surana_Circle__": {
        Stop_Name: "Surana Circle",

        Node1: {
            NodeStop: "Cherlapally Water Tank",
            NodeRoutes: "3K/251, 3KN/251",
            position: UP
        },

        Node2: {
            NodeStop: "Ganesh Temple Kaman",
            NodeRoutes: "3K/251, 3KN/251",
            position: DN
        }
    },

    "__Cherlapally_Water_Tank__": {
        Stop_Name: "Cherlapally Water Tank",

        Node1: {
            NodeStop: "Chakripuram",
            NodeRoutes: "3K/251, 3KN/251",
            position: UP
        },

        Node2: {
            NodeStop: "Surana Circle",
            NodeRoutes: "3K/251, 3KN/251",
            position: DN
        }
    },

    "__Ganesh_Temple_Kaman__": {
        Stop_Name: "Ganesh Temple Kaman",

        Node1: {
            NodeStop: "EC Nagar",
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: UP
        },

        Node2: {
            NodeStop: "HCL Colony",
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: DN
        },

        Node3: {
            NodeStop: "Surana Circle",
            NodeRoutes: "3K/251, 3KN/251",
            position: UP
        },

        Node4: {
            NodeStop: "EC Nagar",
            NodeRoutes: "3K/251, 3KN/251",
            position: DN
        },

        Node5: {
            NodeStop: "HCL Colony",
            NodeRoutes: "6IW/252",
            position: UP
        },

        Node6: {
            NodeStop: "EC Nagar",
            NodeRoutes: "6IW/252",
            position: DN
        },
    },

    "__EC_Nagar__": {
        Stop_Name: "EC Nagar",

        Node1: {
            NodeStop: "Cherlapally Station",
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: UP
        },

        Node2: {
            NodeStop: "Ganesh Temple Kaman",
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: DN
        },

        Node3: {
            NodeStop: "Ganesh Temple Kaman",
            NodeRoutes: "3K/251, 3KN/251, , 6IW/252",
            position: UP
        },

        Node4: {
            NodeStop: "Cherlapally Station",
            NodeRoutes: "3K/251, 3KN/251, 6IW/252",
            position: DN
        }
    },

    "__Cherlapally_Station__": {
        Stop_Name: "Cherlapally Station",

        Node1: {
            NodeStop: "Cherlapally",
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: UP
        },

        Node2: {
            NodeStop: "EC Nagar",
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: DN
        },

        Node3: {
            NodeStop: "EC Nagar",
            NodeRoutes: "3K/251, 3KN/251, , 6IW/252",
            position: UP
        },

        Node4: {
            NodeStop: "Cherlapally",
            NodeRoutes: "3K/251, 3KN/251, 6IW/252",
            position: DN
        },
    },

    "__Cherlapally__": {
        Stop_Name: "Cherlapally",

        Node1: {
            NodeStop: CRPLSTN,
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: UP
        },

        Node2: {
            NodeStop: "Cherlapally Station",
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: DN
        },

        Node3: {
            NodeStop: "Cherlapally Station",
            NodeRoutes: "3K/251, 3KN/251, 6IW/252",
            position: UP
        }
    },

    "__CRPLSTN__": {
        Stop_Name: CRPLSTN,

        Node1: {
            NodeStop: "Cherlapally",
            NodeRoutes: "3KC, 3KN/252, 16AC",
            position: DN
        }
    },

    "__CGCL__": {
        Stop_Name: CGCL,

        Node1: {
            NodeStop: "Suraj Nagar",
            NodeRoutes: "6X",
            position: UP
        }
    },

    "__Suraj_Nagar__": {
        Stop_Name: "Suraj Nagar",

        Node1: {
            NodeStop: "Bolliguda",
            NodeRoutes: "6X",
            position: UP
        },

        Node2: {
            NodeStop: CGCL,
            NodeRoutes: "6X",
            position: DN
        }
    },

    "__Bolliguda__": {
        Stop_Name: "Bolliguda",

        Node1: {
            NodeStop: "Shakthi Sai Nagar",
            NodeRoutes: "6X",
            position: UP
        },

        Node2: {
            NodeStop: "Suraj Nagar",
            NodeRoutes: "6X",
            position: DN
        }
    },

    "__Shakthi_Sai_Nagar__": {
        Stop_Name: "Shakthi Sai Nagar",

        Node1: {
            NodeStop: "Shakthi Sai Nagar Kaman",
            NodeRoutes: "6X",
            position: UP
        },

        Node2: {
            NodeStop: "Bolliguda",
            NodeRoutes: "6X",
            position: DN
        }
    },

    "__Shakthi_Sai_Nagar_Kaman__": {
        Stop_Name: "Shakthi Sai Nagar Kaman",

        Node1: {
            NodeStop: "Noma",
            NodeRoutes: "6X",
            position: UP
        },

        Node2: {
            NodeStop: "Shakthi Sai Nagar",
            NodeRoutes: "6X",
            position: DN
        }
    },

    "__Tirumala_Nagar__": {
        Stop_Name: "Tirumala Nagar",

        Node1: {
            NodeStop: "RTC Colony (MLY)",
            NodeRoutes: "3M, 16CR",
            position: UP
        },

        Node2: {
            NodeStop: "ZTS X Roads",
            NodeRoutes: "3M, 16H/47L, 16H/49M",
            position: DN
        },

        Node3: {
            NodeStop: "ZTS X Roads",
            NodeRoutes: "16H",
            position: UP
        },

        Node4: {
            NodeStop: "Anandh Bagh (NMDC)",
            NodeRoutes: "16CR, 16H",
            position: DN
        },

        Node5: {
            NodeStop: "Anandh Bagh (NMDC)",
            NodeRoutes: "16CR/38T, 16H/47L, 16H/49M, 16R/20",
            position: UP
        },

        Node6: {
            NodeStop: "RTC Colony (MLY)",
            NodeRoutes: "16CR/38T, 16R/20",
            position: DN
        }
    },

    "__RTC_Colony_(MLY)__": {
        Stop_Name: "RTC Colony (MLY)",

        Node1: {
            NodeStop: "Siti Nagar",
            NodeRoutes: "3M, 16CR",
            position: UP
        },

        Node2: {
            NodeStop: "Tirumala Nagar",
            NodeRoutes: "3M, 16CR",
            position: DN
        },

        Node3: {
            NodeStop: "Tirumala Nagar",
            NodeRoutes: "16CR/38T, 16R/20",
            position: UP
        },

        Node4: {
            NodeStop: "Siti Nagar",
            NodeRoutes: "16CR/38T, 16R/20",
            position: DN
        },
    },

    "__Siti_Nagar__": {
        Stop_Name: "Siti Nagar",

        Node1: {
            NodeStop: "Shafi Nagar",
            NodeRoutes: "3M, 16CR",
            position: UP
        },

        Node2: {
            NodeStop: "RTC Colony (MLY)",
            NodeRoutes: "3M, 16CR",
            position: DN
        },

        Node3: {
            NodeStop: "RTC Colony (MLY)",
            NodeRoutes: "16CR/38T, 16R/20",
            position: UP
        },

        Node4: {
            NodeStop: "Shafi Nagar",
            NodeRoutes: "16CR/38T, 16R/20",
            position: DN
        },
    },

    "__Shafi_Nagar__": {
        Stop_Name: "Shafi Nagar",

        Node1: {
            NodeStop: "Bharath Nagar (MLY)",
            NodeRoutes: "3M, 16CR",
            position: UP
        },

        Node2: {
            NodeStop: "Siti Nagar",
            NodeRoutes: "3M, 16CR",
            position: DN
        },

        Node3: {
            NodeStop: "Siti Nagar",
            NodeRoutes: "16CR/38T, 16R/20",
            position: UP
        },

        Node4: {
            NodeStop: "Bharath Nagar (MLY)",
            NodeRoutes: "16CR/38T, 16R/20",
            position: DN
        },
    },

    "__Bharath_Nagar_(MLY)__": {
        Stop_Name: "Bharath Nagar (MLY)",

        Node1: {
            NodeStop: "AS Rao Nagar",
            NodeRoutes: "3M",
            position: UP
        },

        Node2: {
            NodeStop: "Old Safilguda",
            NodeRoutes: "16CR",
            position: UP
        },

        Node3: {
            NodeStop: "Shafi Nagar",
            NodeRoutes: "3M, 16CR",
            position: DN
        },

        Node4: {
            NodeStop: "Shafi Nagar",
            NodeRoutes: "16CR/38T, 16R/20",
            position: UP
        },

        Node5: {
            NodeStop: "AS Rao Nagar",
            NodeRoutes: "16CR/38T, 16R/20",
            position: DN
        },
    },

    "__AS_Rao_Nagar__": {
        Stop_Name: "AS Rao Nagar",

        Node1: {
            NodeStop: "Bharath Nagar (MLY)",
            NodeRoutes: "3M",
            position: DN
        },

        Node2: {
            NodeStop: "Radhika Theater",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16CR, 16D, 16D/24B",
            position: UP
        },

        Node3: {
            NodeStop: "Sharada Theater",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16CR, 16D, 16D/24B",
            position: DN
        },

        Node4: {
            NodeStop: "Sharada Theater",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16ES",
            position: UP
        },

        Node5: {
            NodeStop: "Radhika Theater",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16ES, 16R/20",
            position: DN
        },

        Node6: {
            NodeStop: "Bharath Nagar (MLY)",
            NodeRoutes: "16R/20",
            position: UP
        },
    },

    "__North_Kamala_Nagar__": {
        Stop_Name: "North Kamala Nagar",

        Node1: {
            NodeStop: "Radhika Theater",
            NodeRoutes: "3Y, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16ES, 16R/20",
            position: UP
        },

        Node2: {
            NodeStop: ECILX,
            NodeRoutes: "3Y, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16ES, 16R/20",
            position: DN
        },

        Node3: {
            NodeStop: ECILX,
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16CR",
            position: UP
        },

        Node4: {
            NodeStop: "Radhika Theater",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16CR",
            position: DN
        },
    },

    "__Radhika_Theater__": {
        Stop_Name: "Radhika Theater",

        Node1: {
            NodeStop: "Sri Ram Nagar Colony",
            NodeRoutes: "3Y, 16D, 16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "North Kamala Nagar",
            NodeRoutes: "3Y, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16ES, 16R/20",
            position: DN
        },

        Node3: {
            NodeStop: "North Kamala Nagar",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16CR",
            position: UP
        },

        Node4: {
            NodeStop: "AS Rao Nagar",
            NodeRoutes: "16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CD, 16CR, 16D, 16D/24B",
            position: DN
        },

        Node5: {
            NodeStop: "AS Rao Nagar",
            NodeRoutes: "16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16ES, 16R/20",
            position: UP
        },
    },

    "__Sri_Ram_Nagar_Colony__": {
        Stop_Name: "Sri Ram Nagar Colony",

        Node1: {
            NodeStop: "Kapra Circle",
            NodeRoutes: "3Y, 16D, 16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Radhika Theater",
            NodeRoutes: "3Y, 16D, 16D/24B",
            position: DN
        },

        Node3: {
            NodeStop: "Radhika Theater",
            NodeRoutes: "16D/5K, 16D/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Kapra Circle",
            NodeRoutes: "16D/5K, 16D/49M",
            position: DN
        },
    },

    "__Kapra_Circle__": {
        Stop_Name: "Kapra Circle",

        Node1: {
            NodeStop: "Yellareddyguda (Kapra)",
            NodeRoutes: "3Y",
            position: UP
        },

        Node2: {
            NodeStop: "Jai Jawan Colony",
            NodeRoutes: "16D, 16D/24B",
            position: UP
        },

        Node3: {
            NodeStop: "Sri Ram Nagar Colony",
            NodeRoutes: "3Y, 16D, 16D/24B",
            position: DN
        },

        Node4: {
            NodeStop: "Sri Ram Nagar Colony",
            NodeRoutes: "16D/5K, 16D/49M",
            position: UP
        },

        Node5: {
            NodeStop: "Jai Jawan Colony",
            NodeRoutes: "16D/5K, 16D/49M",
            position: DN
        },
    },

    "__Jai_Jawan_Colony__": {
        Stop_Name: "Jai Jawan Colony",

        Node1: {
            NodeStop: "GR Reddy Nagar",
            NodeRoutes: "16D, 16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Kapra Circle",
            NodeRoutes: "16D, 16D/24B",
            position: DN
        },

        Node3: {
            NodeStop: "Kapra Circle",
            NodeRoutes: "16D/5K, 16D/49M",
            position: UP
        },

        Node4: {
            NodeStop: "GR Reddy Nagar",
            NodeRoutes: "16D/5K, 16D/49M",
            position: DN
        },
    },

    "__GR_Reddy_Nagar__": {
        Stop_Name: "GR Reddy Nagar",

        Node1: {
            NodeStop: "Saket",
            NodeRoutes: "16D, 16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Jai Jawan Colony",
            NodeRoutes: "16D, 16D/24B",
            position: DN
        },

        Node3: {
            NodeStop: "Jai Jawan Colony",
            NodeRoutes: "16D/5K, 16D/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Saket",
            NodeRoutes: "16D/5K, 16D/49M",
            position: DN
        },
    },

    "__Saket__": {
        Stop_Name: "Saket",

        Node1: {
            NodeStop: "Sai Ram Nagar (Kapra)",
            NodeRoutes: "16D, 16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "GR Reddy Nagar",
            NodeRoutes: "16D, 16D/24B",
            position: DN
        },

        Node3: {
            NodeStop: "GR Reddy Nagar",
            NodeRoutes: "16D/5K, 16D/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Sai Ram Nagar (Kapra)",
            NodeRoutes: "16D/5K, 16D/49M",
            position: DN
        },
    },

    "__Sai_Ram_Nagar_(Kapra)__": {
        Stop_Name: "Sai Ram Nagar (Kapra)",

        Node1: {
            NodeStop: "Dammaiguda",
            NodeRoutes: "16D, 16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Saket",
            NodeRoutes: "16D, 16D/24B",
            position: DN
        },

        Node3: {
            NodeStop: "Saket",
            NodeRoutes: "16D/5K, 16D/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Dammaiguda",
            NodeRoutes: "16D/5K, 16D/49M",
            position: DN
        },
    },

    "__Dammaiguda__": {
        Stop_Name: "Dammaiguda",

        Node1: {
            NodeStop: "Dammaiguda X Roads",
            NodeRoutes: "16D, 16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Sai Ram Nagar (Kapra)",
            NodeRoutes: "16D, 16D/24B",
            position: DN
        },

        Node3: {
            NodeStop: "Sai Ram Nagar (Kapra)",
            NodeRoutes: "16D/5K, 16D/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Dammaiguda X Roads",
            NodeRoutes: "16D/5K, 16D/49M",
            position: DN
        },
    },

    "__Yellareddyguda_(Kapra)__": {
        Stop_Name: "Yellareddyguda (Kapra)",

        Node1: {
            NodeStop: "Bank Colony (Saket)",
            NodeRoutes: "3Y",
            position: UP
        },

        Node2: {
            NodeStop: "Kapra Circle",
            NodeRoutes: "3Y",
            position: DN
        },
    },

    "__Bank_Colony_(Saket)__": {
        Stop_Name: "Bank Colony (Saket)",

        Node1: {
            NodeStop: "Vampuguda",
            NodeRoutes: "3Y",
            position: UP
        },

        Node2: {
            NodeStop: "Yellareddyguda (Kapra)",
            NodeRoutes: "3Y",
            position: DN
        },
    },

    "__Vampuguda__": {
        Stop_Name: "Vampuguda",

        Node1: {
            NodeStop: "BJR Nagar",
            NodeRoutes: "3Y",
            position: UP
        },

        Node2: {
            NodeStop: "Bank Colony (Saket)",
            NodeRoutes: "3Y",
            position: DN
        },
    },

    "__BJR_Nagar__": {
        Stop_Name: "BJR Nagar",

        Node1: {
            NodeStop: "Vampuguda",
            NodeRoutes: "3Y",
            position: DN
        },
    },

    "__Kushaiguda__": {
        Stop_Name: "Kushaiguda",

        Node1: {
            NodeStop: "Nagarjuna Nagar Colony",
            NodeRoutes: "3D, 3DN, 3K/242, 3K/281, 6L/281, 15D, 15H/242RG, 16A/281R, 16C/281, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: ECILX,
            NodeRoutes: "3, 3D, 3DN, 3H, 3HN, 3K, 3K/242, 3K/281, 3KN, 6L/281, 15, 15H, 15D, 15H/242RG, 16A/281R, 16C/281, 16CD",
            position: DN
        },

        Node3: {
            NodeStop: ECILX,
            NodeRoutes: "3K/251, 3KN/251, 15H/20, 15D/20, 16AD/5K, 16AB/5K, 16CD/5K, 16CD/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Nagarjuna Nagar Colony",
            NodeRoutes: "3K/251, 3KN/251, 15D/20, 16AD/5K, 16AB/5K, 16CD/5K, 16CD/49M",
            position: DN
        },
    },

    "__Nagarjuna_Nagar_Colony__": {
        Stop_Name: "Nagarjuna Nagar Colony",

        Node1: {
            NodeStop: "Chakripuram",
            NodeRoutes: "3D, 3DN, 3K/242, 3K/281, 6L/281, 15D, 15H/242RG, 16A/281R, 16C/281, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: "Kushaiguda",
            NodeRoutes: "3D, 3DN, 3K/242, 3K/281, 6L/281, 15D, 15H/242RG, 16A/281R, 16C/281, 16CD",
            position: DN
        },

        Node3: {
            NodeStop: "Kushaiguda",
            NodeRoutes: "3K/251, 3KN/251, 15D/20, 16AD/5K, 16AB/5K, 16CD/5K, 16CD/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Chakripuram",
            NodeRoutes: "3K/251, 3KN/251, 15D/20, 16AD/5K, 16AB/5K, 16CD/5K, 16CD/49M",
            position: DN
        },
    },

    "__Chakripuram__": {
        Stop_Name: "Chakripuram",

        Node1: {
            NodeStop: "SV Nagar",
            NodeRoutes: "3D, 3DN, 3K/242, 3K/281, 6L/281, 15D, 15H/242RG, 16A/281R, 16C/281, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: "Nagarjuna Nagar Colony",
            NodeRoutes: "3D, 3DN, 3K/242, 3K/281, 6L/281, 15D, 15H/242RG, 16A/281R, 16C/281, 16CD",
            position: DN
        },

        Node3: {
            NodeStop: "Nagarjuna Nagar Colony",
            NodeRoutes: "3K/251, 3KN/251, 15D/20, 16AD/5K, 16AB/5K, 16CD/5K, 16CD/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Cherlapally Water Tank",
            NodeRoutes: "3K/251, 3KN/251",
            position: DN
        },

        Node5: {
            NodeStop: "SV Nagar",
            NodeRoutes: "15D/20",
            position: DN
        }
    },

    "__SV_Nagar__": {
        Stop_Name: "SV Nagar",

        Node1: {
            NodeStop: "Vijaya Hospitals",
            NodeRoutes: "3D, 3DN, 3K/242, 3K/281, 6L/281, 15D, 15H/242RG, 16A/281R, 16C/281, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: "Chakripuram",
            NodeRoutes: "3D, 3DN, 3K/242, 3K/281, 6L/281, 15D, 15H/242RG, 16A/281R, 16C/281, 16CD",
            position: DN
        },

        Node3: {
            NodeStop: "Chakripuram",
            NodeRoutes: "15D/20, 16AD/5K, 16AB/5K, 16CD/5K, 16CD/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Vijaya Hospitals",
            NodeRoutes: "15D/20, 16AD/5K, 16AB/5K, 16CD/5K, 16CD/49M",
            position: DN
        }
    },

    "__Vijaya_Hospitals__": {
        Stop_Name: "Vijaya Hospitals",

        Node1: {
            NodeStop: "Nagaram",
            NodeRoutes: "3D, 3DN, 3K/242, 3K/281, 6L/281, 15D, 15H/242RG, 16A/281R, 16C/281, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: "SV Nagar",
            NodeRoutes: "3D, 3DN, 3K/242, 3K/281, 6L/281, 15D, 15H/242RG, 16A/281R, 16C/281, 16CD",
            position: DN
        },

        Node3: {
            NodeStop: "SV Nagar",
            NodeRoutes: "15D/20, 16AD/5K, 16AB/5K, 16CD/5K, 16CD/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Nagaram",
            NodeRoutes: "15D/20, 16AD/5K, 16AB/5K, 16CD/5K, 16CD/49M",
            position: DN
        }

    },

    "__Nagaram__": {
        Stop_Name: "Nagaram",

        Node1: {
            NodeStop: "Nagaram Water Tank",
            NodeRoutes: "3D, 3DN, 15D, 17D, 17DH, 17DS, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: "Rampally X Roads",
            NodeRoutes: "3K/242, 3K/281, 6L/281, 15H/242RG, 16A/281R, 16C/281",
            position: UP
        },

        Node3: {
            NodeStop: "Vijaya Hospitals",
            NodeRoutes: "3D, 3DN, 3K/242, 3K/281, 6L/281, 15D, 15H/242RG, 16A/281R, 16C/281, 16CD",
            position: DN
        },

        Node4: {
            NodeStop: "Nagaram Water Tank",
            NodeRoutes: "15D/20, 16AD/5K 16CD/5K, 16CD/49M",
            position: DN
        },

        Node5: {
            NodeStop: "Rampally X Roads",
            NodeRoutes: "16AB/5K",
            position: DN
        },

        Node6: {
            NodeStop: "Vijaya Hospitals",
            NodeRoutes: "15D/20, 16AD/5K, 16AB/5K, 16CD/5K, 16CD/49M",
            position: UP
        }

    },

    "__Nagaram_Water_Tank__": {
        Stop_Name: "Nagaram Water Tank",

        Node1: {
            NodeStop: "Sidhartha Nagar",
            NodeRoutes: "3D, 3DN, 15D, 17D, 17DH, 17DS, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: "Nagaram X Roads",
            NodeRoutes: "3D, 3DN, 15D, 17D, 17DH, 17DS, 16CD",
            position: DN
        },

        Node3: {
            NodeStop: "Nagaram X Roads",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Sidhartha Nagar",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M",
            position: DN
        },
    },

    "__Nagaram_X_Roads__": {
        Stop_Name: "Nagaram X Roads",

        Node1: {
            NodeStop: "Nagaram",
            NodeRoutes: "3D, 3DN, 15D, 17D, 17DH, 17DS, 16CD",
            position: DN
        },

        Node2: {
            NodeStop: "Nagaram",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M",
            position: UP
        },
    },

    "__Sidhartha_Nagar__": {
        Stop_Name: "Sidhartha Nagar",

        Node1: {
            NodeStop: "Ayyappa Colony",
            NodeRoutes: "3D, 3DN, 15D, 17D, 17DH, 17DS, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: "Nagaram Water Tank",
            NodeRoutes: "3D, 3DN, 15D, 17D, 17DH, 17DS, 16CD",
            position: DN
        },

        Node3: {
            NodeStop: "Nagaram Water Tank",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Ayyappa Colony",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M",
            position: DN
        },
    },

    "__Ayyappa_Colony__": {
        Stop_Name: "Ayyappa Colony",

        Node1: {
            NodeStop: "PS Rao Nagar",
            NodeRoutes: "3D, 3DN, 15D, 17D, 17DH, 17DS, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: "Sidhartha Nagar",
            NodeRoutes: "3D, 3DN, 15D, 17D, 17DH, 17DS, 16CD",
            position: DN
        },

        Node3: {
            NodeStop: "Sidhartha Nagar",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M",
            position: UP
        },

        Node4: {
            NodeStop: "PS Rao Nagar",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M",
            position: DN
        },
    },

    "__PS_Rao_Nagar__": {
        Stop_Name: "PS Rao Nagar",

        Node1: {
            NodeStop: "Dammaiguda X Roads",
            NodeRoutes: "3D, 3DN, 15D, 17D, 17DH, 17DS, 16CD",
            position: UP
        },

        Node2: {
            NodeStop: "Ayyappa Colony",
            NodeRoutes: "3D, 3DN, 15D, 17D, 17DH, 17DS, 16CD",
            position: DN
        },

        Node3: {
            NodeStop: "Ayyappa Colony",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Dammaiguda X Roads",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M",
            position: DN
        },
    },

    "__Dammaiguda_X_Roads__": {
        Stop_Name: "Dammaiguda X Roads",

        Node1: {
            NodeStop: "Sai Nagar Colony",
            NodeRoutes: "3D, 3DN, 15D, 16CD, 16D, 16D/24B, 17D, 17DH, 17DS",
            position: UP
        },

        Node2: {
            NodeStop: "PS Rao Nagar",
            NodeRoutes: "3D, 3DN, 15D, 17D, 17DH, 17DS, 16CD",
            position: DN
        },

        Node3: {
            NodeStop: "Dammaiguda",
            NodeRoutes: "16D, 16D/24B",
            position: DN
        },

        Node4: {
            NodeStop: "PS Rao Nagar",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M",
            position: UP
        },

        Node5: {
            NodeStop: "Sai Nagar Colony",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M",
            position: DN
        },

        Node6: {
            NodeStop: "Dammaiguda",
            NodeRoutes: "16D/5K, 16D/49M",
            position: UP
        },
    },

    "__Sai_Nagar_Colony__": {
        Stop_Name: "Sai Nagar Colony",

        Node1: {
            NodeStop: "Ambedkar Nagar",
            NodeRoutes: "3D, 3DN, 15D, 16CD, 16D, 16D/24B, 17D, 17DH, 17DS",
            position: UP
        },

        Node2: {
            NodeStop: "Dammaiguda X Roads",
            NodeRoutes: "3D, 3DN, 15D, 16CD, 16D, 16D/24B, 17D, 17DH, 17DS",
            position: DN
        },

        Node3: {
            NodeStop: "Dammaiguda X Roads",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M",
            position: UP
        },

        Node4: {
            NodeStop: "Ambedkar Nagar",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M",
            position: DN
        },
    },

    "__Ambedkar_Nagar__": {
        Stop_Name: "Ambedkar Nagar",

        Node1: {
            NodeStop: "TGSRTC Scrap Yard",
            NodeRoutes: "16D/24B, 17DH, 17DS",
            position: UP
        },

        Node2: {
            NodeStop: "Sai Nagar Colony",
            NodeRoutes: "3D, 3DN, 15D, 16CD, 16D, 16D/24B, 17D, 17DH, 17DS",
            position: DN
        },

        Node3: {
            NodeStop: "Sai Nagar Colony",
            NodeRoutes: "15D/20, 16AD/5K, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M",
            position: UP
        },
    },

    "__TGSRTC_Scrap_Yard__": {
        Stop_Name: "TGSRTC Scrap Yard",

        Node1: {
            NodeStop: "Gabbilalpet Road",
            NodeRoutes: "16D/24B, 17DH, 17DS",
            position: UP
        },

        Node2: {
            NodeStop: "Ambedkar Nagar",
            NodeRoutes: "16D/24B, 17DH, 17DS",
            position: DN
        },
    },

    "__Gabbilalpet_Road__": {
        Stop_Name: "Gabbilalpet Road",

        Node1: {
            NodeStop: "Pragathi Nagar (Balaji Nagar)",
            NodeRoutes: "16D/24B, 17DH, 17DS",
            position: UP
        },

        Node2: {
            NodeStop: "TGSRTC Scrap Yard",
            NodeRoutes: "16D/24B, 17DH, 17DS",
            position: DN
        },
    },

    "__Pragathi_Nagar_(Balaji_Nagar)__": {
        Stop_Name: "Pragathi Nagar (Balaji Nagar)",

        Node1: {
            NodeStop: "Chennapur X Roads",
            NodeRoutes: "16D/24B, 17DH, 17DS",
            position: UP
        },

        Node2: {
            NodeStop: "Gabbilalpet Road",
            NodeRoutes: "16D/24B, 17DH, 17DS",
            position: DN
        },
    },

    "__Chennapur_X_Roads__": {
        Stop_Name: "Chennapur X Roads",

        Node1: {
            NodeStop: "Chennapur",
            NodeRoutes: "16D/24B, 17DH, 17DS",
            position: UP
        },

        Node2: {
            NodeStop: "Pragathi Nagar (Balaji Nagar)",
            NodeRoutes: "16D/24B, 17DH, 17DS",
            position: DN
        },
    },

    "__Chennapur__": {
        Stop_Name: "Chennapur",

        Node1: {
            NodeStop: "Balaji Nagar",
            NodeRoutes: "16D/24B, 17DH, 17DS",
            position: UP
        },

        Node2: {
            NodeStop: "Chennapur X Roads",
            NodeRoutes: "16D/24B, 17DH, 17DS",
            position: DN
        },
    },

    "__Balaji_Nagar__": {
        Stop_Name: "Balaji Nagar",

        Node1: {
            NodeStop: "Balaji Nagar ZPHS",
            NodeRoutes: "16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Chennapur",
            NodeRoutes: "16D/24B, 17DH, 17DS",
            position: DN
        },
    },

    "__Balaji_Nagar_ZPHS__": {
        Stop_Name: "Balaji Nagar ZPHS",

        Node1: {
            NodeStop: "Poultry Center",
            NodeRoutes: "16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Balaji Nagar",
            NodeRoutes: "16D/24B",
            position: DN
        },
    },

    "__Poultry_Center__": {
        Stop_Name: "Poultry Center",

        Node1: {
            NodeStop: "GKS Pride",
            NodeRoutes: "16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Balaji Nagar ZPHS",
            NodeRoutes: "16D/24B",
            position: DN
        },
    },

    "__GKS_Pride__": {
        Stop_Name: "GKS Pride",

        Node1: {
            NodeStop: "Hanuman Temple (Yapral)",
            NodeRoutes: "16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "Poultry Center",
            NodeRoutes: "16D/24B",
            position: DN
        },
    },

    "__Hanuman_Temple_(Yapral)__": {
        Stop_Name: "Hanuman Temple (Yapral)",

        Node1: {
            NodeStop: "Yapral ZPHS",
            NodeRoutes: "16D/24B",
            position: UP
        },

        Node2: {
            NodeStop: "GKS Pride",
            NodeRoutes: "16D/24B",
            position: DN
        },
    },

    "__Rampally_X_Roads__": {
        Stop_Name: "Rampally X Roads",

        Node1: {
            NodeStop: "Pragathi Nagar Colony (RMPLYX)",
            NodeRoutes: "3K/242, 15H/242RG",
            position: UP
        },

        Node2: {
            NodeStop: "East Gandhi Nagar",
            NodeRoutes: "3K/281, 6L/281, 16A/281R, 16C/281",
            position: UP
        },

        Node3: {
            NodeStop: "Nagaram",
            NodeRoutes: "3K/242, 3K/281, 6L/281, 15H/242RG, 16A/281R, 16C/281",
            position: DN
        },

        Node4: {
            NodeStop: "Nagaram",
            NodeRoutes: "16AB/5K",
            position: UP
        },

        Node5: {
            NodeStop: "Pragathi Nagar Colony (RMPLYX)",
            NodeRoutes: "16AB/5K",
            position: DN
        },
    },

    "__Pragathi_Nagar_Colony_(RMPLYX)__": {
        Stop_Name: "Pragathi Nagar Colony (RMPLYX)",

        Node1: {
            NodeStop: "Ahmedguda",
            NodeRoutes: "3K/242, 15H/242RG",
            position: UP
        },

        Node2: {
            NodeStop: "Rampally X Roads",
            NodeRoutes: "3K/242, 15H/242RG",
            position: DN
        },

        Node3: {
            NodeStop: "Rampally X Roads",
            NodeRoutes: "16AB/5K",
            position: UP
        },

        Node4: {
            NodeStop: "Vikas Nagar",
            NodeRoutes: "16AB/5K",
            position: DN
        },
    },

    "__Sunshine_Colony__": {
        Stop_Name: "Sunshine Colony",

        Node1: {
            NodeStop: "Vikas Nagar",
            NodeRoutes: "16AB/5K",
            position: UP
        },
    },

    "__Vikas_Nagar__": {
        Stop_Name: "Vikas Nagar",

        Node1: {
            NodeStop: "Pragathi Nagar Colony (RMPLYX)",
            NodeRoutes: "16AB/5K",
            position: UP
        },

        Node2: {
            NodeStop: "Sunshine Colony",
            NodeRoutes: "16AB/5K",
            position: DN
        },
    },

    "__Ahmedguda__": {
        Stop_Name: "Ahmedguda",

        Node1: {
            NodeStop: "Bandlaguda (NGRM)",
            NodeRoutes: "3K/242, 15H/242RG",
            position: UP
        },

        Node2: {
            NodeStop: "Pragathi Nagar Colony (RMPLYX)",
            NodeRoutes: "3K/242, 15H/242RG",
            position: DN
        },
    },

    "__Bandlaguda_(NGRM)__": {
        Stop_Name: "Bandlaguda (NGRM)",

        Node1: {
            NodeStop: "Cheriyal X Roads",
            NodeRoutes: "3K/242",
            position: UP
        },

        Node2: {
            NodeStop: "Sai Baba Temple (BDLGD)",
            NodeRoutes: "15H/242RG, 17H/242RG, 242RG",
            position: UP
        },

        Node3: {
            NodeStop: "Ahmedguda",
            NodeRoutes: "3K/242, 15H/242RG",
            position: DN
        },
    },

    "__Sai_Baba_Temple_(BDLGD)__": {
        Stop_Name: "Sai Baba Temple (BDLGD)",

        Node1: {
            NodeStop: "NJR Colony",
            NodeRoutes: "15H/242RG, 17H/242RG, 242RG",
            position: UP
        },

        Node2: {
            NodeStop: "Bandlaguda (NGRM)",
            NodeRoutes: "15H/242RG, 17H/242RG, 242RG",
            position: DN
        },
    },

    "__NJR_Colony__": {
        Stop_Name: "NJR Colony",

        Node1: {
            NodeStop: "Indira Gruhakalpa",
            NodeRoutes: "15H/242RG, 17H/242RG, 242RG",
            position: UP
        },

        Node2: {
            NodeStop: "Sai Baba Temple (BDLGD)",
            NodeRoutes: "15H/242RG, 17H/242RG, 242RG",
            position: DN
        },
    },

    "__Indira_Gruhakalpa__": {
        Stop_Name: "Indira Gruhakalpa",

        Node1: {
            NodeStop: "RG Colony 2BHK",
            NodeRoutes: "15H/242RG, 17H/242RG, 24B/211RG, 242RG, 211RG",
            position: UP
        },

        Node2: {
            NodeStop: "NJR Colony",
            NodeRoutes: "15H/242RG, 17H/242RG, 242RG",
            position: DN
        },
    },

    "__RG_Colony_2BHK__": {
        Stop_Name: "RG Colony 2BHK",

        Node1: {
            NodeStop: "RG Colony",
            NodeRoutes: "15H/242RG, 17H/242RG, 24B/211RG, 242RG, 211RG",
            position: UP
        },

        Node2: {
            NodeStop: "Indira Gruhakalpa",
            NodeRoutes: "15H/242RG, 17H/242RG, 24B/211RG, 242RG, 211RG",
            position: DN
        },
    },

    "__RG_Colony__": {
        Stop_Name: "RG Colony",

        Node1: {
            NodeStop: "RG Colony 2BHK",
            NodeRoutes: "15H/242RG, 17H/242RG, 24B/211RG, 242RG, 211RG",
            position: DN
        },
    },

    "__Cheriyal_X_Roads__": {
        Stop_Name: "Cheriyal X Roads",

        Node1: {
            NodeStop: "Kundanpally X Roads",
            NodeRoutes: "3K/242",
            position: UP
        },

        Node2: {
            NodeStop: "Bandlaguda (NGRM)",
            NodeRoutes: "3K/242",
            position: DN
        },
    },

    "__Kundanpally_X_Roads__": {
        Stop_Name: "Kundanpally X Roads",

        Node1: {
            NodeStop: "Kundanpally ORR",
            NodeRoutes: "3K/242",
            position: UP
        },

        Node2: {
            NodeStop: "Cheriyal X Roads",
            NodeRoutes: "3K/242",
            position: DN
        },
    },

    "__Kundanpally_ORR__": {
        Stop_Name: "Kundanpally ORR",

        Node1: {
            NodeStop: "Keesara ORR",
            NodeRoutes: "3K/242",
            position: UP
        },

        Node2: {
            NodeStop: "Kundanpally X Roads",
            NodeRoutes: "3K/242",
            position: DN
        },
    },

    "__Keesara_ORR__": {
        Stop_Name: "Keesara ORR",

        Node1: {
            NodeStop: "Keesara PS",
            NodeRoutes: "3K/242",
            position: UP
        },

        Node2: {
            NodeStop: "Kundanpally ORR",
            NodeRoutes: "3K/242",
            position: DN
        },
    },

    "__Keesara_PS__": {
        Stop_Name: "Keesara PS",

        Node1: {
            NodeStop: "Keesara X Roads",
            NodeRoutes: "3K/242",
            position: UP
        },

        Node2: {
            NodeStop: "Keesara ORR",
            NodeRoutes: "3K/242",
            position: DN
        },
    },

    "__Keesara_X_Roads__": {
        Stop_Name: "Keesara X Roads",

        Node1: {
            NodeStop: "Keesaragutta Kaman",
            NodeRoutes: "3K/242",
            position: UP
        },

        Node2: {
            NodeStop: "Keesara PS",
            NodeRoutes: "3K/242",
            position: DN
        },
    },

    "__Keesaragutta_Kaman__": {
        Stop_Name: "Keesaragutta Kaman",

        Node1: {
            NodeStop: "Keesaragutta",
            NodeRoutes: "3K/242",
            position: UP
        },

        Node2: {
            NodeStop: "Keesara X Roads",
            NodeRoutes: "3K/242",
            position: DN
        },
    },

    "__Keesaragutta__": {
        Stop_Name: "Keesaragutta",

        Node1: {
            NodeStop: "Keesaragutta Kaman",
            NodeRoutes: "3K/242",
            position: DN
        }
    },

    "__East_Gandhi_Nagar__": {
        Stop_Name: "East Gandhi Nagar",

        Node1: {
            NodeStop: "Satyanarayana Garden",
            NodeRoutes: "3K/281, 6L/281, 16A/281R, 16C/281",
            position: UP
        },

        Node2: {
            NodeStop: "Rampally X Roads",
            NodeRoutes: "3K/281, 6L/281, 16A/281R, 16C/281",
            position: DN
        },
    },

    "__Satyanarayana_Garden__": {
        Stop_Name: "Satyanarayana Garden",

        Node1: {
            NodeStop: "Annapurna Nagar",
            NodeRoutes: "3K/281, 6L/281, 16A/281R, 16C/281",
            position: UP
        },

        Node2: {
            NodeStop: "East Gandhi Nagar",
            NodeRoutes: "3K/281, 6L/281, 16A/281R, 16C/281",
            position: DN
        },
    },

    "__Annapurna_Nagar__": {
        Stop_Name: "Annapurna Nagar",

        Node1: {
            NodeStop: "Mallikarjuna Nagar (RMPLY)",
            NodeRoutes: "3K/281, 6L/281, 16A/281R, 16C/281",
            position: UP
        },

        Node2: {
            NodeStop: "Satyanarayana Garden",
            NodeRoutes: "3K/281, 6L/281, 16A/281R, 16C/281",
            position: DN
        },
    },

    "__Mallikarjuna_Nagar_(RMPLY)__": {
        Stop_Name: "Mallikarjuna Nagar (RMPLY)",

        Node1: {
            NodeStop: "RTC Colony (RMPLY)",
            NodeRoutes: "3K/281, 6L/281, 16A/281R, 16C/281",
            position: UP
        },

        Node2: {
            NodeStop: "Annapurna Nagar",
            NodeRoutes: "3K/281, 6L/281, 16A/281R, 16C/281",
            position: DN
        },
    },

    "__RTC_Colony_(RMPLY)__": {
        Stop_Name: "RTC Colony (RMPLY)",

        Node1: {
            NodeStop: "RL Nagar",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: UP
        },

        Node2: {
            NodeStop: "Mallikarjuna Nagar (RMPLY)",
            NodeRoutes: "3K/281, 6L/281, 16A/281R, 16C/281",
            position: DN
        },
    },

    "__RL_Nagar__": {
        Stop_Name: "RL Nagar",

        Node1: {
            NodeStop: "Vinayak Nagar (RMPLY)",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: UP
        },

        Node2: {
            NodeStop: "RTC Colony (RMPLY)",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: DN
        },
    },

    "__Vinayak_Nagar_(RMPLY)__": {
        Stop_Name: "Vinayak Nagar (RMPLY)",

        Node1: {
            NodeStop: "Rampally",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: UP
        },

        Node2: {
            NodeStop: "RL Nagar",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: DN
        },
    },

    "__Rampally__": {
        Stop_Name: "Rampally",

        Node1: {
            NodeStop: "Yamnampet",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: UP
        },

        Node2: {
            NodeStop: "Vinayak Nagar (RMPLY)",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: DN
        },
    },

    "__Yamnampet__": {
        Stop_Name: "Yamnampet",

        Node1: {
            NodeStop: "Rockwoods College",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: UP
        },

        Node2: {
            NodeStop: "Rampally",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: DN
        },
    },

    "__Rockwoods_College__": {
        Stop_Name: "Rockwoods College",

        Node1: {
            NodeStop: "Ghatkesar ORR",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: UP
        },

        Node2: {
            NodeStop: "Yamnampet",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: DN
        },
    },

    "__Ghatkesar_ORR__": {
        Stop_Name: "Ghatkesar ORR",

        Node1: {
            NodeStop: "Shivareddy Guda",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: UP
        },

        Node2: {
            NodeStop: "Rockwoods College",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: DN
        },
    },

    "__Shivareddy_Guda__": {
        Stop_Name: "Shivareddy Guda",

        Node1: {
            NodeStop: "Edulabad X Roads",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: UP
        },

        Node2: {
            NodeStop: "Ghatkesar ORR",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: DN
        },
    },

    "__Edulabad_X_Roads__": {
        Stop_Name: "Edulabad X Roads",

        Node1: {
            NodeStop: "Ghatkesar",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: UP
        },

        Node2: {
            NodeStop: "Shivareddy Guda",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: DN
        },
    },

    "__Ghatkesar__": {
        Stop_Name: "Ghatkesar",

        Node1: {
            NodeStop: "Edulabad X Roads",
            NodeRoutes: "3K/281, 6L/281, 16C/281",
            position: DN
        },
    },

    "__Ambedkar_Degree_College__": {
        Stop_Name: "Ambedkar Degree College",

        Node1: {
            NodeStop: "Bagh Lingampally",
            NodeRoutes: "1B, 6R, 6RK",
            position: UP
        },

        Node2: {
            NodeStop: "VST",
            NodeRoutes: "1B, 6R, 6RK",
            position: DN
        }
    },

    "__Bagh_Lingampally__": {
        Stop_Name: "Bagh Lingampally",

        Node1: {
            NodeStop: "YMCA",
            NodeRoutes: "1B",
            position: UP
        },

        Node2: {
            NodeStop: "Narayanaguda",
            NodeRoutes: "6R, 6RK",
            position: UP
        },

        Node3: {
            NodeStop: "Ambedkar Degree College",
            NodeRoutes: "1B, 6R, 6RK",
            position: DN
        }
    },

    "__Chaderghat__": {
        Stop_Name: "Chaderghat",

        Node1: {
            NodeStop: "Nalgonda X Roads",
            NodeRoutes: "1D, 1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS, 3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: UP
        },

        Node2: {
            NodeStop: KOTI_W,
            NodeRoutes: "1D, 1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS, 3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: DN
        },

        // Direction = Dilshuknagar - Koti
        Node3: {
            NodeStop: KOTI_W,
            NodeRoutes: "1D/229",
            position: UP
        },
    },

    "__Nalgonda_X_Roads__": {
        Stop_Name: "Nalgonda X Roads",

        Node1: {
            NodeStop: "Malakpet New Market",
            NodeRoutes: "1D, 1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "Chaderghat",
            NodeRoutes: "1D, 1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS, 3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: DN
        },

        Node3: {
            NodeStop: "Chaderghat",
            NodeRoutes: "1D/229",
            position: UP
        },

        Node4: {
            NodeStop: "Chanchalguda",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: UP
        },
    },

    "__Chanchalguda__": {
        Stop_Name: "Chanchalguda",

        Node1: {
            NodeStop: "Saidabad",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: UP
        },

        Node2: {
            NodeStop: "Nalgonda X Roads",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: DN
        },
    },

    "__Saidabad__": {
        Stop_Name: "Saidabad",

        Node1: {
            NodeStop: "Madannapet",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: UP
        },

        Node2: {
            NodeStop: "Chanchalguda",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: DN
        },
    },

    "__Madannapet__": {
        Stop_Name: "Madannapet",

        Node1: {
            NodeStop: "Saidabad Function Hall",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: UP
        },

        Node2: {
            NodeStop: "Saidabad",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: DN
        },
    },

    "__Saidabad_Function_Hall__": {
        Stop_Name: "Saidabad Function Hall",

        Node1: {
            NodeStop: "IS Sadan",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: UP
        },

        Node2: {
            NodeStop: "Madannapet",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: DN
        },
    },

    "__IS_Sadan__": {
        Stop_Name: "IS Sadan",

        Node1: {
            NodeStop: "Santhosh Nagar",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: UP
        },

        Node2: {
            NodeStop: "Saidabad Function Hall",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: DN
        },
    },

    "__Santhosh_Nagar__": {
        Stop_Name: "Santhosh Nagar",

        Node1: {
            NodeStop: "Owaisi Hospital",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: UP
        },

        Node2: {
            NodeStop: "IS Sadan",
            NodeRoutes: "3K/102, 3K/102B, 3K/203N, 3N/203N, 9K/102",
            position: DN
        },
    },

    "__Malakpet_New_Market__": {
        Stop_Name: "Malakpet New Market",

        Node1: {
            NodeStop: "Malakpet",
            NodeRoutes: "1D, 1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "Nalgonda X Roads",
            NodeRoutes: "1D, 1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS",
            position: DN
        },

        // Direction = Dilshuknagar - Koti
        Node3: {
            NodeStop: "Nalgonda X Roads",
            NodeRoutes: "1D/229",
            position: UP
        },
    },

    "__Malakpet__": {
        Stop_Name: "Malakpet",

        Node1: {
            NodeStop: "Moosarambagh",
            NodeRoutes: "1D, 1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "Malakpet New Market",
            NodeRoutes: "1D, 1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS",
            position: DN
        },

        // Direction = Dilshuknagar - Koti
        Node3: {
            NodeStop: "Malakpet New Market",
            NodeRoutes: "1D/229",
            position: UP
        },
    },

    "__Moosarambagh__": {
        Stop_Name: "Moosarambagh",

        Node1: {
            NodeStop: "Dilshuknagar",
            NodeRoutes: "1D, 1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "Malakpet",
            NodeRoutes: "1D, 1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS",
            position: DN
        },

        // Direction = Dilshuknagar - Koti
        Node3: {
            NodeStop: "Malakpet",
            NodeRoutes: "1D/229",
            position: UP
        },
    },

    "__Dilshuknagar__": {
        Stop_Name: "Dilshuknagar",

        Node1: {
            NodeStop: "Chaitanyapuri",
            NodeRoutes: "1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "Moosarambagh",
            NodeRoutes: "1D, 1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS",
            position: DN
        },

        // Direction = Dilshuknagar - Koti
        Node3: {
            NodeStop: "Moosarambagh",
            NodeRoutes: "1D/229",
            position: UP
        },
    },

    "__Chaitanyapuri__": {
        Stop_Name: "Chaitanyapuri",

        Node1: {
            NodeStop: "Kothapet",
            NodeRoutes: "1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "Dilshuknagar",
            NodeRoutes: "1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS",
            position: DN
        }
    },

    "__Kothapet__": {
        Stop_Name: "Kothapet",

        Node1: {
            NodeStop: "Kothapet X Roads",
            NodeRoutes: "1D/299, 1H, 1HD, 1L, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "Maruthi Nagar (DSNR)",
            NodeRoutes: "1MD",
            position: UP
        },

        Node3: {
            NodeStop: "Chaitanyapuri",
            NodeRoutes: "1D/299, 1H, 1HD, 1L, 1MD, 1V, 1VM, 1VS",
            position: DN
        }
    },

    "__Kothapet_X_Roads__": {
        Stop_Name: "Kothapet X Roads",

        Node1: {
            NodeStop: "Dwaraka Nagar",
            NodeRoutes: "1D/299, 1H, 1L, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "Huda Colony (SRRNGR)",
            NodeRoutes: "1HD",
            position: UP
        },

        Node3: {
            NodeStop: "Kothapet",
            NodeRoutes: "1D/299, 1H, 1HD, 1L, 1V, 1VM, 1VS",
            position: DN
        }
    },

    "__Dwaraka_Nagar__": {
        Stop_Name: "Dwaraka Nagar",

        Node1: {
            NodeStop: "NTR Nagar",
            NodeRoutes: "1D/299, 1H, 1L, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "Kothapet X Roads",
            NodeRoutes: "1D/299, 1H, 1L, 1V, 1VM, 1VS",
            position: DN
        }
    },

    "__NTR_Nagar__": {
        Stop_Name: "NTR Nagar",

        Node1: {
            NodeStop: "LB Nagar Metro",
            NodeRoutes: "1D/299, 1H, 1L, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "Dwaraka Nagar",
            NodeRoutes: "1D/299, 1H, 1L, 1V, 1VM, 1VS",
            position: DN
        }
    },

    "__LB_Nagar_Metro__": {
        Stop_Name: "LB Nagar Metro",

        Node1: {
            NodeStop: "LB Nagar",
            NodeRoutes: "1D/299, 1H, 1L, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "NTR Nagar",
            NodeRoutes: "1D/299, 1H, 1L, 1V, 1VM, 1VS",
            position: DN
        }
    },

    "__LB_Nagar__": {
        Stop_Name: "LB Nagar",

        Node1: {
            NodeStop: "Chintalakunta Checkpost",
            NodeRoutes: "1D/299, 1H, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "LB Nagar Metro",
            NodeRoutes: "1D/299, 1H, 1L, 1V, 1VM, 1VS",
            position: DN
        },

        Node3: {
            NodeStop: "Sagar Ring Road",
            NodeRoutes: "3K/90L",
            position: UP
        },

        Node4: {
            NodeStop: "Kamineni Hospitals",
            NodeRoutes: "3K/90L",
            position: DN
        },
    },

    "__Chintalakunta_Checkpost__": {
        Stop_Name: "Chintalakunta Checkpost",

        Node1: {
            NodeStop: "Chintalakunta",
            NodeRoutes: "1D/299, 1H, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "LB Nagar",
            NodeRoutes: "1D/299, 1H, 1V, 1VM, 1VS",
            position: DN
        }
    },

    "__Chintalakunta__": {
        Stop_Name: "Chintalakunta",

        Node1: {
            NodeStop: "Panama",
            NodeRoutes: "1D/299, 1H, 1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "Chintalakunta Checkpost",
            NodeRoutes: "1D/299, 1H, 1V, 1VM, 1VS",
            position: DN
        }
    },

    "__Panama__": {
        Stop_Name: "Panama",

        Node1: {
            NodeStop: "Sushma Theater",
            NodeRoutes: "1D/299, 1H",
            position: UP
        },

        Node2: {
            NodeStop: "Vanasthalipuram",
            NodeRoutes: "1V, 1VM, 1VS",
            position: UP
        },

        Node3: {
            NodeStop: "Chintalakunta",
            NodeRoutes: "1D/299, 1H, 1V, 1VM, 1VS",
            position: DN
        }
    },

    "__Sushma_Theater__": {
        Stop_Name: "Sushma Theater",

        Node1: {
            NodeStop: "Auto Nagar",
            NodeRoutes: "1D/299, 1H",
            position: UP
        },

        Node2: {
            NodeStop: "Panama",
            NodeRoutes: "1D/299, 1H",
            position: DN
        }
    },

    "__Auto_Nagar__": {
        Stop_Name: "Auto Nagar",

        Node1: {
            NodeStop: "High Court Colony",
            NodeRoutes: "1D/299, 1H",
            position: UP
        },

        Node2: {
            NodeStop: "Sushma Theater",
            NodeRoutes: "1D/299, 1H",
            position: DN
        }
    },

    "__High_Court_Colony__": {
        Stop_Name: "High Court Colony",

        Node1: {
            NodeStop: "Bhagya Latha",
            NodeRoutes: "1D/299, 1H",
            position: UP
        }
    },

    "__Bhagya_Latha__": {
        Stop_Name: "Bhagya Latha",

        Node1: {
            NodeStop: "Hayathnagar Depot",
            NodeRoutes: "1D/299, 1H",
            position: UP
        },

        Node2: {
            NodeStop: "Auto Nagar",
            NodeRoutes: "1D/299, 1H",
            position: DN
        }
    },

    "__Hayathnagar_Depot__": {
        Stop_Name: "Hayathnagar Depot",

        Node1: {
            NodeStop: "RTC Colony (HYT)",
            NodeRoutes: "1D/299, 1H",
            position: UP
        },

        Node2: {
            NodeStop: "Bhagya Latha",
            NodeRoutes: "1D/299, 1H",
            position: DN
        }
    },

    "__RTC Colony_(HYT)__": {
        Stop_Name: "RTC Colony (HYT)",

        Node1: {
            NodeStop: "Hayathnagar",
            NodeRoutes: "1D/299, 1H",
            position: UP
        },

        Node2: {
            NodeStop: "Torrur X Roads",
            NodeRoutes: "1D/299, 1H",
            position: DN
        }
    },

    "__Torrur_ X_Roads__": {
        Stop_Name: "Torrur X Roads",

        Node1: {
            NodeStop: "Hayathnagar Depot",
            NodeRoutes: "1D/299, 1H",
            position: DN
        }
    },

    "__Hayathnagar__": {
        Stop_Name: "Hayathnagar",

        Node1: {
            NodeStop: "",
            NodeRoutes: "",
            position: UP
        },

        Node2: {
            NodeStop: "RTC Colony (HYT)",
            NodeRoutes: "1D/299, 1H",
            position: DN
        }
    },

    "__Maruthi_Nagar_(DSNR)__": {
        Stop_Name: "Maruthi Nagar (DSNR)",

        Node1: {
            NodeStop: "New Maruthi Nagar",
            NodeRoutes: "1MD",
            position: UP
        },

        Node2: {
            NodeStop: "Kothapet",
            NodeRoutes: "1MD",
            position: DN
        }
    },

    "__New_Maruthi_Nagar__": {
        Stop_Name: "New Maruthi Nagar",

        Node1: {
            NodeStop: "Maruthi Nagar (DSNR)",
            NodeRoutes: "1MD",
            position: DN
        }
    },

    "__Huda_Colony_(SRRNGR)__": {
        Stop_Name: "Huda Colony (SRRNGR)",

        Node1: {
            NodeStop: "MRO Office (Saroor Nagar)",
            NodeRoutes: "1HD",
            position: UP
        },

        Node2: {
            NodeStop: "Kothapet X Roads",
            NodeRoutes: "1HD",
            position: DN
        }
    },

    "__MRO_Office_(Saroor_Nagar)__": {
        Stop_Name: "MRO Office (Saroor Nagar)",

        Node1: {
            NodeStop: "Venkateshwara Colony",
            NodeRoutes: "1HD",
            position: UP
        },

        Node2: {
            NodeStop: "Huda Colony (SRRNGR)",
            NodeRoutes: "1HD",
            position: DN
        }
    },

    "__Venkateshwara_Colony__": {
        Stop_Name: "Venkateshwara Colony",

        Node1: {
            NodeStop: "Saroor Nagar",
            NodeRoutes: "1HD",
            position: UP
        },

        Node2: {
            NodeStop: "MRO Office (Saroor Nagar)",
            NodeRoutes: "1HD",
            position: DN
        }
    },

    "__Saroor_Nagar__": {
        Stop_Name: "Saroor Nagar",

        Node1: {
            NodeStop: "Venkateshwara Colony",
            NodeRoutes: "1HD",
            position: DN
        }
    },

    "__Vanasthalipuram__": {
        Stop_Name: "Vanasthalipuram",

        Node1: {
            NodeStop: "Ganesh Temple",
            NodeRoutes: "1V, 1VM, 1VS",
            position: UP
        },

        Node2: {
            NodeStop: "Panama",
            NodeRoutes: "1V, 1VM, 1VS",
            position: DN
        }
    },

    "__Ganesh_Temple__": {
        Stop_Name: "Ganesh Temple",

        Node1: {
            NodeStop: "Red Tank",
            NodeRoutes: "1V",
            position: UP
        },

        Node2: {
            NodeStop: "Rythu Bazar",
            NodeRoutes: "1VM, 1VS",
            position: UP
        },

        Node3: {
            NodeStop: "Vanasthalipuram",
            NodeRoutes: "1V, 1VM, 1VS",
            position: DN
        }
    },

    "__Red_Tank__": {
        Stop_Name: "Red Tank",

        Node1: {
            NodeStop: "Govt Hospital (BN Reddy)",
            NodeRoutes: "1V",
            position: UP
        },

        Node2: {
            NodeStop: "Ganesh Temple",
            NodeRoutes: "1V",
            position: DN
        }
    },

    "__Govt_Hospital_(BN_Reddy)__": {
        Stop_Name: "Govt Hospital (BN Reddy)",

        Node1: {
            NodeStop: "NGOs Colony",
            NodeRoutes: "1V",
            position: UP
        },

        Node2: {
            NodeStop: "Red Tank",
            NodeRoutes: "1V",
            position: DN
        }
    },

    "__NGOs_Colony__": {
        Stop_Name: "NGOs Colony",

        Node1: {
            NodeStop: "Govt Hospital (BN Reddy)",
            NodeRoutes: "1V",
            position: DN
        }
    },

    "__Rythu_Bazar__": {
        Stop_Name: "Rythu Bazar",

        Node1: {
            NodeStop: "Kamla Nagar",
            NodeRoutes: "1VM",
            position: UP
        },

        Node2: {
            NodeStop: "Gouthami Nagar",
            NodeRoutes: "1VS",
            position: UP
        },

        Node3: {
            NodeStop: "Vanasthalipuram Complex",
            NodeRoutes: "1VM, 1VS",
            position: DN
        },
    },

    "__Gouthami_Nagar__": {
        Stop_Name: "Gouthami Nagar",

        Node1: {
            NodeStop: "Sahab Nagar",
            NodeRoutes: "1VS",
            position: UP
        },

        Node2: {
            NodeStop: "Rythu Bazar",
            NodeRoutes: "1VS",
            position: DN
        },
    },

    "__Sahab_Nagar__": {
        Stop_Name: "Sahab Nagar",

        Node1: {
            NodeStop: "Gouthami Nagar",
            NodeRoutes: "1VS",
            position: DN
        },
    },

    "__Kamla_Nagar__": {
        Stop_Name: "Kamla Nagar",

        Node1: {
            NodeStop: "Subhadra Nagar",
            NodeRoutes: "1VM",
            position: UP
        },

        Node2: {
            NodeStop: "Rythu Bazar",
            NodeRoutes: "1VM",
            position: DN
        },
    },

    "__Subhadra_Nagar__": {
        Stop_Name: "Subhadra Nagar",

        Node1: {
            NodeStop: "Sharada Nagar",
            NodeRoutes: "1VM",
            position: UP
        },

        Node2: {
            NodeStop: "Kamla Nagar",
            NodeRoutes: "1VM",
            position: DN
        },
    },

    "__Sharada_Nagar__": {
        Stop_Name: "Sharada Nagar",

        Node1: {
            NodeStop: "Shanthi Nagar (VNSTLPRM)",
            NodeRoutes: "1VM",
            position: UP
        },

        Node2: {
            NodeStop: "Subhadra Nagar",
            NodeRoutes: "1VM",
            position: DN
        },
    },

    "__Shanthi_Nagar_(VNSTLPRM)__": {
        Stop_Name: "Shanthi Nagar (VNSTLPRM)",

        Node1: {
            NodeStop: "Narsimharao Nagar",
            NodeRoutes: "1VM",
            position: UP
        },

        Node2: {
            NodeStop: "Sharada Nagar",
            NodeRoutes: "1VM",
            position: DN
        },
    },

    "__Narsimharao_Nagar__": {
        Stop_Name: "Narsimharao Nagar",

        Node1: {
            NodeStop: "Sama Nagar X Roads",
            NodeRoutes: "1VM",
            position: UP
        },

        Node2: {
            NodeStop: "Shanthi Nagar (VNSTLPRM)",
            NodeRoutes: "1VM",
            position: DN
        },
    },

    "__Sama_Nagar_X_Roads__": {
        Stop_Name: "Sama Nagar X Roads",

        Node1: {
            NodeStop: "Sai Baba Temple",
            NodeRoutes: "1VM",
            position: UP
        },

        Node2: {
            NodeStop: "Narsimharao Nagar",
            NodeRoutes: "1VM",
            position: DN
        },
    },

    "__Sai_Baba_Temple__": {
        Stop_Name: "Sai Baba Temple",

        Node1: {
            NodeStop: "Sai Nagar",
            NodeRoutes: "1VM",
            position: UP
        },

        Node2: {
            NodeStop: "Sama Nagar X Roads",
            NodeRoutes: "1VM",
            position: DN
        },
    },

    "__Sai_Nagar__": {
        Stop_Name: "Sai Nagar",

        Node1: {
            NodeStop: "Sai Baba Temple",
            NodeRoutes: "1VM",
            position: DN
        },
    },

    "__Vanasthalipuram_Complex__": {
        Stop_Name: "Vanasthalipuram Complex",

        Node1: {
            NodeStop: "Ganesh Temple",
            NodeRoutes: "1VM, 1VS",
            position: DN
        },
    },

};

let RoutesData = {
    "_1": {
        RouteNo: "1",
        From: SEC_RTF,
        To: "Afzalgunj",
        UP_Distance: "9",
        DN_Distance: "9.2",
        Route_Status: "Regular",
    },

    "_1_25S": {
        RouteNo: "1/25S",
        From: "Afzalgunj",
        To: "Suchitra",
        UP_Distance: "22.8",
        DN_Distance: "22.4",
        Route_Status: "",
    },

    "_1_25S_229": {
        RouteNo: "1/25S/229",
        From: "Afzalgunj",
        To: "Medchal",
        UP_Distance: "43.9",
        DN_Distance: "43.8",
        Route_Status: "",
    },

    "_1B": {
        RouteNo: "1B",
        From: SEC_RTF,
        To: "Afzalgunj",
        UP_Distance: "9.9",
        DN_Distance: "10.5",
        Route_Status: "",
    },

    "_1C": {
        RouteNo: "1C",
        From: SEC_RTF,
        To: CBS,
        UP_Distance: "8.1",
        DN_Distance: "8.5",
        Route_Status: "",
    },

    "_1D": {
        RouteNo: "1D",
        From: SEC_RTF,
        To: "Dilshuknagar",
        UP_Distance: "11.1",
        DN_Distance: "11.3",
        Route_Status: "",
    },

    "_1D_229": {
        RouteNo: "1D/229",
        From: "Dilshuknagar",
        To: "Medchal",
        UP_Distance: "38.3",
        DN_Distance: "37.6",
        Route_Status: "",
    },

    "_1D_299": {
        RouteNo: "1D/299",
        From: SEC_RTF,
        To: "Hayathnagar",
        UP_Distance: "21.8",
        DN_Distance: "22.8",
        Route_Status: "Regular",
    },

    "_1H": {
        RouteNo: "1H",
        From: SEC_RTF,
        To: "Hayathnagar",
        UP_Distance: "21.8",
        DN_Distance: "22.8",
        Route_Status: "Regular",
    },

    "_1HD": {
        RouteNo: "1HD",
        From: SEC_RTF,
        To: "Saroor Nagar",
        UP_Distance: "14.8",
        DN_Distance: "14.8",
        Route_Status: "",
    },

    "_1J": {
        RouteNo: "1J",
        From: SEC_RTF,
        To: "Jiyaguda KHT",
        UP_Distance: "14.5",
        DN_Distance: "14.9",
        Route_Status: "Regular",
    },

    "_1JL": {
        RouteNo: "1JL",
        From: SEC_RTF,
        To: "Langer House",
        UP_Distance: "17.9",
        DN_Distance: "18.8",
        Route_Status: "",
    },

    "_1JK": {
        RouteNo: "1JK",
        From: SEC_RTF,
        To: "Kali Mandir",
        UP_Distance: "23.2",
        DN_Distance: "24.2",
        Route_Status: "",
    },

    "_1K": {
        RouteNo: "1K",
        From: SEC_RTF,
        To: "Kacheguda Depot",
        UP_Distance: "9.2",
        DN_Distance: "12.6",
        Route_Status: "",
    },

    "_1L": {
        RouteNo: "1L",
        From: SEC_RTF,
        To: LBNR,
        UP_Distance: "15.6",
        DN_Distance: "15.7",
        Route_Status: "Regular",
    },

    "_1MD": {
        RouteNo: "1MD",
        From: SEC_RTF,
        To: "New Maruthi Nagar",
        UP_Distance: "14.3",
        DN_Distance: "14.5",
        Route_Status: "",
    },

    "_1P": {
        RouteNo: "1P",
        From: SEC_RTF,
        To: "Afzalgunj",
        UP_Distance: "9.1",
        DN_Distance: "9.9",
        Route_Status: "",
    },

    "_1P_25S": {
        RouteNo: "1P/25S",
        From: "Afzalgunj",
        To: "Suchitra",
        UP_Distance: "23.5",
        DN_Distance: "22.5",
        Route_Status: "",
    },

    "_1V": {
        RouteNo: "1V",
        From: SEC_RTF,
        To: "NGOs colony",
        UP_Distance: "20.1",
        DN_Distance: "20",
        Route_Status: "Regular",
    },

    "_1VM": {
        RouteNo: "1VM",
        From: SEC_RTF,
        To: "Sai Nagar",
        UP_Distance: "22.6",
        DN_Distance: "22.3",
        Route_Status: "",
    },

    "_1VS": {
        RouteNo: "1VS",
        From: SEC_RTF,
        To: "Sahab Nagar",
        UP_Distance: "21.3",
        DN_Distance: "21.6",
        Route_Status: "",
    },

    "_1W": {
        RouteNo: "1W",
        From: SEC_RTF,
        To: "Koti Womens College",
        UP_Distance: "6.6",
        DN_Distance: "6.7",
        Route_Status: "",
    },

    "_1X": {
        RouteNo: "1X",
        From: SEC_RTF,
        To: "Kacheguda Station",
        UP_Distance: "6.8",
        DN_Distance: "6.8",
        Route_Status: "",
    },

    "_1Z": {
        RouteNo: "1Z",
        From: SEC_RTF,
        To: "Aramghar",
        UP_Distance: "17.6",
        DN_Distance: "18.1",
        Route_Status: "Regular",
    },

    "_1Z_229": {
        RouteNo: "1Z/229",
        From: "Aramghar",
        To: "Medchal",
        UP_Distance: "45.1",
        DN_Distance: "43.8",
        Route_Status: "",
    },

    "_1Z_251": {
        RouteNo: "1Z/251",
        From: SEC_RTF,
        To: "Shamshabad",
        UP_Distance: "26.2",
        DN_Distance: "26.6",
        Route_Status: "Regular",
    },

    "_1Z_539": {
        RouteNo: "1Z/539",
        From: SEC_RTF,
        To: "Kanha",
        UP_Distance: "54.2",
        DN_Distance: "54.5",
        Route_Status: "",
    },

    "_2": {
        RouteNo: "2",
        From: SEC_RTF,
        To: "Afzalgunj",
        UP_Distance: "10.7",
        DN_Distance: "10.8",
        Route_Status: "Regular",
    },

    "_2_25S": {
        RouteNo: "2/25S",
        From: "Afzalgunj",
        To: "Suchitra",
        UP_Distance: "24.4",
        DN_Distance: "24.1",
        Route_Status: "",
    },

    "_2C": {
        RouteNo: "2C",
        From: SEC_RTF,
        To: "Barkas",
        UP_Distance: "19.8",
        DN_Distance: "19.9",
        Route_Status: "Regular",
    },

    "_2J": {
        RouteNo: "2J",
        From: SEC_RTF,
        To: "Jiyaguda KHT",
        UP_Distance: "16.2",
        DN_Distance: "16.5",
        Route_Status: "Regular",
    },

    "_2K": {
        RouteNo: "2K",
        From: SEC_RTF,
        To: "Kacheguda Depot",
        UP_Distance: "10.2",
        DN_Distance: "10.5",
        Route_Status: "",
    },

    "_2U": {
        RouteNo: "2U",
        From: SEC_RTF,
        To: "Uppuguda",
        UP_Distance: "16.7",
        DN_Distance: "16.7",
        Route_Status: "",
    },

    "_2Z": {
        RouteNo: "2Z",
        From: SEC_RTF,
        To: "Sri Ram Colony",
        UP_Distance: "25",
        DN_Distance: "25.3",
        Route_Status: "",
    },

    "_2Z_251": {
        RouteNo: "2Z/251",
        From: SEC_RTF,
        To: "Shamshabad",
        UP_Distance: "27.9",
        DN_Distance: "28.2",
        Route_Status: "",
    },

    "_3": {
        RouteNo: "3",
        From: "Afzalgunj",
        To: "Kushaiguda",
        UP_Distance: "19.6",
        DN_Distance: "19.7",
        Route_Status: "Regular",
    },

    "_3C": {
        RouteNo: "3C",
        From: "Afzalgunj",
        To: "ECIL X Roads",
        UP_Distance: "18.8",
        DN_Distance: "18.7",
        Route_Status: "Terminated",
    },

    "_3D": {
        RouteNo: "3D",
        From: "Afzalgunj",
        To: "Ambedkar Nagar",
        UP_Distance: "27.4",
        DN_Distance: "27.6",
        Route_Status: "Regular",
    },

    "_3DN": {
        RouteNo: "3DN",
        From: "Afzalgunj",
        To: "Ambedkar Nagar",
        UP_Distance: "29.8",
        DN_Distance: "28.7",
        Route_Status: "Regular",
    },

    "_3H": {
        RouteNo: "3H",
        From: "Afzalgunj",
        To: "Kushaiguda",
        UP_Distance: "21.4",
        DN_Distance: "21.5",
        Route_Status: "Terminated",
    },

    "_3HN": {
        RouteNo: "3HN",
        From: "Afzalgunj",
        To: "Kushaiguda",
        UP_Distance: "23.8",
        DN_Distance: "22.6",
        Route_Status: "Terminated",
    },

    "_3K": {
        RouteNo: "3K",
        From: "Afzalgunj",
        To: "Kushaiguda",
        UP_Distance: "21.1",
        DN_Distance: "21.2",
        Route_Status: "Regular",
    },

    "_3K_6M": {
        RouteNo: "3K/6M",
        From: "ECIL X Roads",
        To: "Mehdipatnam",
        UP_Distance: "22.9",
        DN_Distance: "22.8",
        Route_Status: "",
    },

    "_3K_90L": {
        RouteNo: "3K/90L",
        From: "ECIL X Roads",
        To: "BDL",
        UP_Distance: "26.7",
        DN_Distance: "27.8",
        Route_Status: "",
    },

    "_3K_95": {
        RouteNo: "3K/95",
        From: "ECIL X Roads",
        To: "Aramghar",
        UP_Distance: "28.7",
        DN_Distance: "29",
        Route_Status: "",
    },

    "_3K_102": {
        RouteNo: "3K/102",
        From: "ECIL X Roads",
        To: "BDL",
        UP_Distance: "26.3",
        DN_Distance: "26",
        Route_Status: "",
    },

    "_3K_102B": {
        RouteNo: "3K/102B",
        From: "ECIL X Roads",
        To: "Badangpet",
        UP_Distance: "29.1",
        DN_Distance: "29.3",
        Route_Status: "",
    },

    "_3K_203N": {
        RouteNo: "3K/203N",
        From: "ECIL X Roads",
        To: "Nadergul",
        UP_Distance: "34.5",
        DN_Distance: "34.5",
        Route_Status: "",
    },

    "_3K_242": {
        RouteNo: "3K/242",
        From: "Afzalgunj",
        To: "Keesaragutta",
        UP_Distance: "38.4",
        DN_Distance: "38.1",
        Route_Status: "",
    },

    "_3K_251": {
        RouteNo: "3K/251",
        From: "Cherlapally",
        To: "Shamshabad",
        UP_Distance: "37.2",
        DN_Distance: "37.5",
        Route_Status: "",
    },

    "_3K_252": {
        RouteNo: "3K/252",
        From: "ECIL X Roads",
        To: "RGI Airport",
        UP_Distance: "44.6",
        DN_Distance: "45.9",
        Route_Status: "",
    },

    "_3K_281": {
        RouteNo: "3K/281",
        From: "Afzalgunj",
        To: "Ghatkesar",
        UP_Distance: "36.5",
        DN_Distance: "36.1",
        Route_Status: "",
    },

    "_3KC": {
        RouteNo: "3KC",
        From: "Afzalgunj",
        To: CRPLSTN,
        UP_Distance: "27.7",
        DN_Distance: "27.6",
        Route_Status: "",
    },

    "_3KJ": {
        RouteNo: "3KJ",
        From: "ECIL X Roads",
        To: "Jiyaguda KHT",
        UP_Distance: "25.4",
        DN_Distance: "25.8",
        Route_Status: "",
    },

    "_3KN": {
        RouteNo: "3KN",
        From: "Afzalgunj",
        To: "Kushaiguda",
        UP_Distance: "23.5",
        DN_Distance: "22.3",
        Route_Status: "Regular",
    },

    "_3KN_6M": {
        RouteNo: "3KN/6M",
        From: "ECIL X Roads",
        To: "Mehdipatnam",
        UP_Distance: "23.9",
        DN_Distance: "25.2",
        Route_Status: "",
    },

    "_3KN_95": {
        RouteNo: "3KN/95",
        From: "ECIL X Roads",
        To: "Aramghar",
        UP_Distance: "29.8",
        DN_Distance: "31.4",
        Route_Status: "",
    },

    "_3KN_251": {
        RouteNo: "3KN/251",
        From: "Cherlapally",
        To: "Shamshabad",
        UP_Distance: "48",
        DN_Distance: "49.6",
        Route_Status: "",
    },

    "_3KN_252": {
        RouteNo: "3KN/252",
        From: "Afzalgunj",
        To: CRPLSTN,
        UP_Distance: "25.9",
        DN_Distance: "23.8",
        Route_Status: "",
    },

    "_3L": {
        RouteNo: "3L",
        From: "Afzalgunj",
        To: "Prashanth Nagar",
        UP_Distance: "15",
        DN_Distance: "14.7",
        Route_Status: "",
    },

    "_3M": {
        RouteNo: "3M",
        From: "Afzalgunj",
        To: "AS Rao Nagar",
        UP_Distance: "17.2",
        DN_Distance: "17.9",
        Route_Status: "",
    },

    "_3N": {
        RouteNo: "3N",
        From: "Afzalgunj",
        To: "Hema Nagar",
        UP_Distance: "17.3",
        DN_Distance: "15.7",
        Route_Status: "Regular",
    },

    "_3N_203N": {
        RouteNo: "3N/203N",
        From: "BEL",
        To: "Nadergul",
        UP_Distance: "30.9",
        DN_Distance: "32.7",
        Route_Status: "",
    },

    "_3T": {
        RouteNo: "3T",
        From: "Afzalgunj",
        To: "Tarnaka",
        UP_Distance: "10.5",
        DN_Distance: "10.2",
        Route_Status: "",
    },

    "_3Y": {
        RouteNo: "3Y",
        From: "Afzalgunj",
        To: "BJR Nagar",
        UP_Distance: "26.2",
        DN_Distance: "26.1",
        Route_Status: "Terminated",
    },

    "_5_5R": {
        RouteNo: "5/5R",
        From: "Mehdipatnam",
        To: "Risala Bazar",
        UP_Distance: "22.4",
        DN_Distance: "22.7",
        Route_Status: "",
    },

    "_5G": {
        RouteNo: "5G",
        From: SEC_ALF,
        To: "Golconda",
        UP_Distance: "18.6",
        DN_Distance: "19.6",
        Route_Status: "Regular",
    },

    "_5K": {
        RouteNo: "5K",
        From: SEC_ALF,
        To: "Mehdipatnam",
        UP_Distance: "10.4",
        DN_Distance: "11.5",
        Route_Status: "Regular",
    },

    "_5KM": {
        RouteNo: "5KM",
        From: SEC_ALF,
        To: "Manikonda",
        UP_Distance: "18.3",
        DN_Distance: "20.7",
        Route_Status: "",
    },

    "_5K_16A": {
        RouteNo: "5K/16A",
        From: "Mehdipatnam",
        To: "ECIL X Roads",
        UP_Distance: "24.4",
        DN_Distance: "25",
        Route_Status: "Regular",
    },

    "_5K_16AD": {
        RouteNo: "5K/16AD",
        From: "Mehdipatnam",
        To: "Ambedkar Nagar",
        UP_Distance: "31.9",
        DN_Distance: "32.9",
        Route_Status: "",
    },

    "_5K_16C": {
        RouteNo: "5K/16C",
        From: "Mehdipatnam",
        To: "ECIL X Roads",
        UP_Distance: "24.4",
        DN_Distance: "24.3",
        Route_Status: "Regular",
    },

    "_5K_16CD": {
        RouteNo: "5K/16CD",
        From: "Mehdipatnam",
        To: "Ambedkar Nagar",
        UP_Distance: "31.9",
        DN_Distance: "32.2",
        Route_Status: "",
    },

    "_5K_16D": {
        RouteNo: "5K/16D",
        From: "Mehdipatnam",
        To: "Ambedkar Nagar",
        UP_Distance: "28.2",
        DN_Distance: "28.7",
        Route_Status: "",
    },

    "_5K_25S": {
        RouteNo: "5K/25S",
        From: "Mehdipatnam",
        To: "Suchitra",
        UP_Distance: "21.9",
        DN_Distance: "22.2",
        Route_Status: "",
    },

    "_5K_92A": {
        RouteNo: "5K/92A",
        From: SEC_ALF,
        To: "Aramghar",
        UP_Distance: "21",
        DN_Distance: "22.2",
        Route_Status: "Regular",
    },

    "_5K_92R": {
        RouteNo: "5K/92R",
        From: SEC_ALF,
        To: "Rajendra Nagar",
        UP_Distance: "20.7",
        DN_Distance: "21.8",
        Route_Status: "",
    },

    "_5K_120K": {
        RouteNo: "5K/120K",
        From: SEC_ALF,
        To: "Kokapet",
        UP_Distance: "24.6",
        DN_Distance: "25.5",
        Route_Status: "",
    },

    "_5K_125": {
        RouteNo: "5K/125",
        From: SEC_ALF,
        To: "Kondapur",
        UP_Distance: "25.6",
        DN_Distance: "25.2",
        Route_Status: "",
    },

    "_5K_188": {
        RouteNo: "5K/188",
        From: SEC_ALF,
        To: "Kali Mandir",
        UP_Distance: "20",
        DN_Distance: "21.1",
        Route_Status: "",
    },

    "_5K_229": {
        RouteNo: "5K/229",
        From: "Mehdipatnam",
        To: "Medchal",
        UP_Distance: "34.3",
        DN_Distance: "33.8",
        Route_Status: "",
    },

    "_5K_251": {
        RouteNo: "5K/251",
        From: SEC_ALF,
        To: "Shamshabad",
        UP_Distance: "29.6",
        DN_Distance: "30.6",
        Route_Status: "Regular",
    },

    "_5M": {
        RouteNo: "5M",
        From: SEC_ALF,
        To: "Mehdipatnam",
        UP_Distance: "11.6",
        DN_Distance: "13.1",
        Route_Status: "",
    },

    "_5R": {
        RouteNo: "5R",
        From: "Mehdipatnam",
        To: "Risala Bazar",
        UP_Distance: "20.2",
        DN_Distance: "20.4",
        Route_Status: "",
    },

    "_5R_5": {
        RouteNo: "5R/5",
        From: "Risala Bazar",
        To: "Mehdipatnam",
        UP_Distance: "22.7",
        DN_Distance: "22.4",
        Route_Status: "",
    },

    "_5W": {
        RouteNo: "5W",
        From: SEC_ALF,
        To: "Waverock",
        UP_Distance: "26",
        DN_Distance: "28.7",
        Route_Status: "",
    },

    "_6IW_252": {
        RouteNo: "6IW/252",
        From: "Cherlapally",
        To: "Waverock",
        UP_Distance: "40.6",
        DN_Distance: "44.3",
        Route_Status: "",
    },

    "_6L_281": {
        RouteNo: "6L/281",
        From: "Kondapur",
        To: "Ghatkesar",
        UP_Distance: "52.8",
        DN_Distance: "54.2",
        Route_Status: "",
    },

    "_6M_3K": {
        RouteNo: "6M/3K",
        From: "Mehdipatnam",
        To: "ECIL X Roads",
        UP_Distance: "22.8",
        DN_Distance: "22.9",
        Route_Status: "",
    },

    "_6M_3KN": {
        RouteNo: "6M/3KN",
        From: "Mehdipatnam",
        To: "ECIL X Roads",
        UP_Distance: "25.2",
        DN_Distance: "23.9",
        Route_Status: "",
    },

    "_6NW": {
        RouteNo: "6NW",
        From: "ECIL X Roads",
        To: "Waverock",
        UP_Distance: "39.4",
        DN_Distance: "42.4",
        Route_Status: "",
    },

    "_6N_47W": {
        RouteNo: "6N/47W",
        From: "ECIL X Roads",
        To: "Waverock",
        UP_Distance: "39.4",
        DN_Distance: "42.4",
        Route_Status: "",
    },

    "_6H": {
        RouteNo: "6H",
        From: "ECIL X Roads",
        To: "Mehdipatnam",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "Terminated",
    },

    "_6R": {
        RouteNo: "6R",
        From: "Ram Nagar Gundu",
        To: "Mehdipatnam",
        UP_Distance: "10.4",
        DN_Distance: "10.7",
        Route_Status: "",
    },

    "_6RK": {
        RouteNo: "6RK",
        From: "Ram Nagar Gundu",
        To: "Kali Mandir",
        UP_Distance: "20",
        DN_Distance: "20.3",
        Route_Status: "Regular",
    },

    "_6X": {
        RouteNo: "6X",
        From: "Chengicherla",
        To: "Irrum Manzil",
        UP_Distance: "24.9",
        DN_Distance: "25.7",
        Route_Status: "",
    },

    "_7Z": {
        RouteNo: "7Z",
        From: SEC_ALF,
        To: "Aramghar",
        UP_Distance: "20.1",
        DN_Distance: "22.1",
        Route_Status: "Regular",
    },

    "_7Z_251": {
        RouteNo: "7Z/251",
        From: SEC_ALF,
        To: "Shamshabad",
        UP_Distance: "28.7",
        DN_Distance: "30.7",
        Route_Status: "Regular",
    },

    "_8_37": {
        RouteNo: "8/37",
        From: "Gandhi Bhavan",
        To: "Kushaiguda",
        UP_Distance: "20.2",
        DN_Distance: "20.8",
        Route_Status: "",
    },

    "_8A": {
        RouteNo: "8A",
        From: SEC_ALF,
        To: CDRYGT,
        UP_Distance: "17.2",
        DN_Distance: "18.8",
        Route_Status: "Regular",
    },

    "_8A_70": {
        RouteNo: "8A/70",
        From: SEC_ALF,
        To: "Theegalakunta",
        UP_Distance: "16.9",
        DN_Distance: "18.4",
        Route_Status: "",
    },

    "_8A_75R": {
        RouteNo: "8A/75R",
        From: SEC_ALF,
        To: "Rajanna Bhavi",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_8A_85": {
        RouteNo: "8A/85",
        From: SEC_ALF,
        To: "Pahadi Sharif",
        UP_Distance: "24.2",
        DN_Distance: "25.8",
        Route_Status: "",
    },

    "_8A_178G": {
        RouteNo: "8A/178G",
        From: SEC_ALF,
        To: "Gouse Nagar",
        UP_Distance: "21.6",
        DN_Distance: "23.5",
        Route_Status: "",
    },

    "_8A_251": {
        RouteNo: "8A/251",
        From: SEC_ALF,
        To: "Kothur (Gudur)",
        UP_Distance: "43.8",
        DN_Distance: "45.7",
        Route_Status: "",
    },

    "_8A_252S": {
        RouteNo: "8A/252S",
        From: SEC_ALF,
        To: "Shankarapuram",
        UP_Distance: "38.1",
        DN_Distance: "36",
        Route_Status: "",
    },

    "_8A_253": {
        RouteNo: "8A/253",
        From: SEC_ALF,
        To: "Shamshabad",
        UP_Distance: "35",
        DN_Distance: "36.3",
        Route_Status: "",
    },

    "_8A_253M": {
        RouteNo: "8A/253M",
        From: SEC_ALF,
        To: "Maheshwaram",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_8A_532": {
        RouteNo: "8A/532",
        From: SEC_ALF,
        To: "Kothur (Shadnagar)",
        UP_Distance: "43.8",
        DN_Distance: "45.7",
        Route_Status: "",
    },

    "_8A_539": {
        RouteNo: "8A/539",
        From: SEC_ALF,
        To: "Kanha",
        UP_Distance: "54.7",
        DN_Distance: "56.6",
        Route_Status: "",
    },

    "_8AK": {
        RouteNo: "8AK",
        From: SEC_ALF,
        To: CDRYGT,
        UP_Distance: "17.2",
        DN_Distance: "18.8",
        Route_Status: "",
    },

    "_8C": {
        RouteNo: "8C",
        From: SEC_ALF,
        To: CDRYGT,
        UP_Distance: "18.8",
        DN_Distance: "19.3",
        Route_Status: "Regular",
    },

    "_8CN": {
        RouteNo: "8CN",
        From: SEC_ALF,
        To: "Charminar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_8C_85P": {
        RouteNo: "8C/85P",
        From: SEC_ALF,
        To: "Pahadi Sharif",
        UP_Distance: "25.8",
        DN_Distance: "26.3",
        Route_Status: "",
    },

    "_8C_229": {
        RouteNo: "8C/229",
        From: "Afzalgunj",
        To: "Medchal",
        UP_Distance: "32.6",
        DN_Distance: "32.7",
        Route_Status: "",
    },

    "_8M": {
        RouteNo: "8M",
        From: SEC_ALF,
        To: CBS,
        UP_Distance: "11.3",
        DN_Distance: "12.8",
        Route_Status: "",
    },

    "_8N": {
        RouteNo: "8N",
        From: SEC_ALF,
        To: "Nampally",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_8R": {
        RouteNo: "8R",
        From: "Risala Bazar",
        To: CBS,
        UP_Distance: "21",
        DN_Distance: "21.3",
        Route_Status: "",
    },

    "_8UA": {
        RouteNo: "8UA",
        From: SEC_ALF,
        To: "Uppuguda",
        UP_Distance: "15.4",
        DN_Distance: "16.8",
        Route_Status: "",
    },

    "_9A": {
        RouteNo: "9A",
        From: CBS,
        To: "AG Colony",
        UP_Distance: "12.5",
        DN_Distance: "11.9",
        Route_Status: "",
    },

    "_9F": {
        RouteNo: "9F",
        From: CBS,
        To: "Borabanda",
        UP_Distance: "15.3",
        DN_Distance: "15.2",
        Route_Status: "Regular",
    },

    "_9K": {
        RouteNo: "9K",
        From: "Afzalgunj",
        To: "Jeedimetla",
        UP_Distance: "24.9",
        DN_Distance: "24.9",
        Route_Status: "Regular",
    },

    "_9K_102": {
        RouteNo: "9K/102",
        From: "Gandimaisamma",
        To: "BDL",
        UP_Distance: "37.6",
        DN_Distance: "38.2",
        Route_Status: "",
    },

    "_9K_230P": {
        RouteNo: "9K/230P",
        From: "Afzalgunj",
        To: "Dundigal",
        UP_Distance: "34.9",
        DN_Distance: "34.7",
        Route_Status: "",
    },

    "_9K_272G": {
        RouteNo: "9K/272G",
        From: "Afzalgunj",
        To: "Gandimaisamma",
        UP_Distance: "30.8",
        DN_Distance: "30.9",
        Route_Status: "Regular",
    },

    "_9X": {
        RouteNo: "9X",
        From: CBS,
        To: "Jeedimetla",
        UP_Distance: "24.6",
        DN_Distance: "24.2",
        Route_Status: "Regular",
    },

    "_9X_41C": {
        RouteNo: "9X/41C",
        From: CBS,
        To: "Asbestos Colony",
        UP_Distance: "22.8",
        DN_Distance: "22.5",
        Route_Status: "",
    },

    "_9X_230P": {
        RouteNo: "9X/230P",
        From: CBS,
        To: "Dundigal",
        UP_Distance: "34.6",
        DN_Distance: "34",
        Route_Status: "",
    },

    "_9X_272G": {
        RouteNo: "9X/272G",
        From: CBS,
        To: "Gandimaisamma",
        UP_Distance: "30.5",
        DN_Distance: "30.2",
        Route_Status: "Regular",
    },

    "_9X_283D": {
        RouteNo: "9X/283D",
        From: CBS,
        To: "Suraram Colony",
        UP_Distance: "29.1",
        DN_Distance: "26.7",
        Route_Status: "",
    },

    "_9XM": {
        RouteNo: "9XM",
        From: "Charminar",
        To: "Jeedimetla",
        UP_Distance: "26.1",
        DN_Distance: "26.4",
        Route_Status: "",
    },

    "_9XM_230P": {
        RouteNo: "9XM/230P",
        From: "Charminar",
        To: "Dundigal",
        UP_Distance: "36.1",
        DN_Distance: "36.2",
        Route_Status: "",
    },

    "_9YF": {
        RouteNo: "9YF",
        From: "Charminar",
        To: "Borabanda",
        UP_Distance: "17.6",
        DN_Distance: "17.2",
        Route_Status: "Regular",
    },

    "_9YF_11W": {
        RouteNo: "9YF/11W",
        From: "Charminar",
        To: "Waverock",
        UP_Distance: "30.9",
        DN_Distance: "34.3",
        Route_Status: "",
    },

    "_10": {
        RouteNo: "10",
        From: SEC_ALF,
        To: "Sanath Nagar",
        UP_Distance: "12.5",
        DN_Distance: "11.9",
        Route_Status: "Regular",
    },

    "_10F": {
        RouteNo: "10F",
        From: SEC_ALF,
        To: "Borabanda",
        UP_Distance: "12.9",
        DN_Distance: "13.7",
        Route_Status: "Regular",
    },

    "_10FV": {
        RouteNo: "10FV",
        From: SEC_ALF,
        To: "VBIT Park",
        UP_Distance: "21.1",
        DN_Distance: "23.6",
        Route_Status: "",
    },

    "_10H": {
        RouteNo: "10H",
        From: SEC_ALF,
        To: "Kondapur",
        UP_Distance: "19.6",
        DN_Distance: "21",
        Route_Status: "Regular",
    },

    "_10H_16A": {
        RouteNo: "10H/16A",
        From: "Kondapur",
        To: "ECIL X Roads",
        UP_Distance: "34.7",
        DN_Distance: "34.2",
        Route_Status: "",
    },

    "_10H_16C": {
        RouteNo: "10H/16C",
        From: "Kondapur",
        To: "ECIL X Roads",
        UP_Distance: "34.7",
        DN_Distance: "33.5",
        Route_Status: "",
    },

    "_10H_17H": {
        RouteNo: "10H/17H",
        From: "Kondapur",
        To: "ECIL X Roads",
        UP_Distance: "34.3",
        DN_Distance: "33.2",
        Route_Status: "Terminated",
    },

    "_10H_18C": {
        RouteNo: "10H/18C",
        From: "Kondapur",
        To: "Chengicherla",
        UP_Distance: "36.7",
        DN_Distance: "37",
        Route_Status: "",
    },

    "_10H_220K": {
        RouteNo: "10H/220K",
        From: SEC_ALF,
        To: "Kollur 2BHK",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_10HA": {
        RouteNo: "10HA",
        From: SEC_ALF,
        To: "Patancheruvu",
        UP_Distance: "34.1",
        DN_Distance: "35.4",
        Route_Status: "",
    },

    "_10HL": {
        RouteNo: "10HL",
        From: SEC_ALF,
        To: "Lingampally",
        UP_Distance: "27",
        DN_Distance: "28.5",
        Route_Status: "",
    },

    "_10HP": {
        RouteNo: "10HP",
        From: SEC_ALF,
        To: "Prem Nagar",
        UP_Distance: "22",
        DN_Distance: "23.7",
        Route_Status: "",
    },

    "_10HW": {
        RouteNo: "10HW",
        From: SEC_ALF,
        To: "Waverock",
        UP_Distance: "27.5",
        DN_Distance: "30",
        Route_Status: "",
    },

    "_10J": {
        RouteNo: "10J",
        From: SEC_ALF,
        To: "JNTU College",
        UP_Distance: "16.9",
        DN_Distance: "16.5",
        Route_Status: "",
    },

    "_10J_171": {
        RouteNo: "10J/171",
        From: "KPHB 4TH PHASE",
        To: "Shahpur Nagar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_10JP": {
        RouteNo: "10JP",
        From: "JNTU College",
        To: "Pragathi Nagar",
        UP_Distance: "7.3",
        DN_Distance: "5.2",
        Route_Status: "",
    },

    "_10K": {
        RouteNo: "10K",
        From: SEC_ALF,
        To: "KPHB 4TH PHASE",
        UP_Distance: "19.7",
        DN_Distance: "20",
        Route_Status: "",
    },

    "_10K_250": {
        RouteNo: "10K/250",
        From: "KPHB 4TH PHASE",
        To: "ECIL X Roads",
        UP_Distance: "34.1",
        DN_Distance: "34.1",
        Route_Status: "",
    },

    "_10KG": {
        RouteNo: "10KG",
        From: SEC_ALF,
        To: "Gokul Plots",
        UP_Distance: "19.9",
        DN_Distance: "19.5",
        Route_Status: "",
    },

    "_10KJ": {
        RouteNo: "10KJ",
        From: SEC_ALF,
        To: "Jagathgirigutta",
        UP_Distance: "18.5",
        DN_Distance: "18.5",
        Route_Status: "",
    },

    "_10KJ_18": {
        RouteNo: "10KJ/18",
        From: "Jagathgirigutta",
        To: "Uppal Depot",
        UP_Distance: "29.8",
        DN_Distance: "29.6",
        Route_Status: "",
    },

    "_10KL": {
        RouteNo: "10KL",
        From: SEC_ALF,
        To: "Lingampally",
        UP_Distance: "25.3",
        DN_Distance: "25.3",
        Route_Status: "",
    },

    "_10KM": {
        RouteNo: "10KM",
        From: SEC_ALF,
        To: MYPX,
        UP_Distance: "20.3",
        DN_Distance: "20.2",
        Route_Status: "",
    },

    "_10KM_224G": {
        RouteNo: "10KM/224G",
        From: SEC_ALF,
        To: "Gandimaisamma",
        UP_Distance: "35",
        DN_Distance: "35",
        Route_Status: "",
    },

    "_10W": {
        RouteNo: "10W",
        From: SEC_ALF,
        To: "Waverock",
        UP_Distance: "27.5",
        DN_Distance: "30",
        Route_Status: "",
    },

    "_10X": {
        RouteNo: "10X",
        From: SEC_ALF,
        To: "SR Nagar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_10Y": {
        RouteNo: "10Y",
        From: SEC_ALF,
        To: "Yousufguda",
        UP_Distance: "9.9",
        DN_Distance: "11.2",
        Route_Status: "",
    },

    "_10YF": {
        RouteNo: "10YF",
        From: SEC_ALF,
        To: "Borabanda",
        UP_Distance: "13",
        DN_Distance: "14.1",
        Route_Status: "",
    },

    "_10YF_16S": {
        RouteNo: "10YF/16S",
        From: "Borabanda",
        To: "Safilguda",
        UP_Distance: "20.9",
        DN_Distance: "20.7",
        Route_Status: "",
    },

    "_11W": {
        RouteNo: "11W",
        From: "Mythrivanam",
        To: "Waverock",
        UP_Distance: "18.1",
        DN_Distance: "21.9",
        Route_Status: "",
    },

    "_11W_9YF": {
        RouteNo: "11W/9YF",
        From: "Waverock",
        To: "Charminar",
        UP_Distance: "34.3",
        DN_Distance: "30.9",
        Route_Status: "",
    },

    "_14P": {
        RouteNo: "14P",
        From: SEC_BS,
        To: "Prashanth Nagar",
        UP_Distance: "6.6",
        DN_Distance: "7.7",
        Route_Status: "",
    },

    "_14PX": {
        RouteNo: "14PX",
        From: SEC_BS,
        To: SEC_BS,
        UP_Distance: "14.1",
        DN_Distance: "14.1",
        Route_Status: "Terminated",
    },

    "_15": {
        RouteNo: "15",
        From: SEC_BS,
        To: "Kushaiguda",
        UP_Distance: "11",
        DN_Distance: "12.1",
        Route_Status: "",
    },

    "_15D": {
        RouteNo: "15D",
        From: SEC_BS,
        To: "Ambedkar Nagar",
        UP_Distance: "19",
        DN_Distance: "20.7",
        Route_Status: "",
    },

    "_15H": {
        RouteNo: "15H",
        From: SEC_BS,
        To: "Kushaiguda",
        UP_Distance: "12.7",
        DN_Distance: "14.2",
        Route_Status: "Regular",
    },

    "_15H_20": {
        RouteNo: "15H/20",
        From: "Kushaiguda",
        To: "Secretariate",
        UP_Distance: "19.4",
        DN_Distance: "18.1",
        Route_Status: "",
    },

    "_15H_242RG": {
        RouteNo: "15H/242RG",
        From: SEC_BS,
        To: "RG Colony",
        UP_Distance: "22.7",
        DN_Distance: "23.6",
        Route_Status: "Terminated",
    },

    "_15D_20": {
        RouteNo: "15D/20",
        From: "Ambedkar Nagar",
        To: "Mehdipatnam",
        UP_Distance: "31.1",
        DN_Distance: "29.4",
        Route_Status: "",
    },

    "_16_20": {
        RouteNo: "16/20",
        From: "Safilguda",
        To: "Irrum Manzil",
        UP_Distance: "16.8",
        DN_Distance: "14.9",
        Route_Status: "",
    },

    "_16A": {
        RouteNo: "16A",
        From: SEC_BS,
        To: "ECIL X Roads",
        UP_Distance: "13.5",
        DN_Distance: "14.6",
        Route_Status: "Regular",
    },

    "_16A_5K": {
        RouteNo: "16A/5K",
        From: "ECIL X Roads",
        To: "Mehdipatnam",
        UP_Distance: "25",
        DN_Distance: "24.4",
        Route_Status: "",
    },

    "_16A_10H": {
        RouteNo: "16A/10H",
        From: "ECIL X Roads",
        To: "Kondapur",
        UP_Distance: "34.2",
        DN_Distance: "34.7",
        Route_Status: "",
    },

    "_16A_20": {
        RouteNo: "16A/20",
        From: "ECIL X Roads",
        To: "Afzalgunj",
        UP_Distance: "24.6",
        DN_Distance: "23.6",
        Route_Status: "",
    },

    "_16A_47L": {
        RouteNo: "16A/47L",
        From: "ECIL X Roads",
        To: "Manikonda",
        UP_Distance: "33.6",
        DN_Distance: "34.5",
        Route_Status: "",
    },

    "_16A_47W": {
        RouteNo: "16A/47W",
        From: "ECIL X Roads",
        To: "Waverock",
        UP_Distance: "40.8",
        DN_Distance: "42",
        Route_Status: "",
    },

    "_16A_49M": {
        RouteNo: "16A/49M",
        From: "ECIL X Roads",
        To: "Mehdipatnam",
        UP_Distance: "27.1",
        DN_Distance: "26.4",
        Route_Status: "",
    },

    "_16A_219": {
        RouteNo: "16A/219",
        From: "ECIL X Roads",
        To: "Patancheruvu",
        UP_Distance: "45.4",
        DN_Distance: "45.3",
        Route_Status: "",
    },

    "_16A_281R": {
        RouteNo: "16A/281R",
        From: SEC_BS,
        To: "RTC Colony (RMPLY)",
        UP_Distance: "21.2",
        DN_Distance: "22.5",
        Route_Status: "",
    },

    "_16AD_5K": {
        RouteNo: "16AD/5K",
        From: "Ambedkar Nagar",
        To: "Mehdipatnam",
        UP_Distance: "32.9",
        DN_Distance: "31.9",
        Route_Status: "",
    },

    "_16AB_5K": {
        RouteNo: "16AB/5K",
        From: "Sunshine Colony",
        To: "Mehdipatnam",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_16AC": {
        RouteNo: "16AC",
        From: SEC_BS,
        To: CRPLSTN,
        UP_Distance: "21",
        DN_Distance: "22.2",
        Route_Status: "",
    },

    "_16AK": {
        RouteNo: "16AK",
        From: SEC_BS,
        To: "ECIL X Roads",
        UP_Distance: "13.3",
        DN_Distance: "14.4",
        Route_Status: "Regular",
    },

    "_16C": {
        RouteNo: "16C",
        From: SEC_BS,
        To: "ECIL X Roads",
        UP_Distance: "13.5",
        DN_Distance: "13.9",
        Route_Status: "Regular",
    },

    "_16C_5K": {
        RouteNo: "16C/5K",
        From: "ECIL X Roads",
        To: "Mehdipatnam",
        UP_Distance: "24.3",
        DN_Distance: "24.4",
        Route_Status: "",
    },

    "_16C_10H": {
        RouteNo: "16C/10H",
        From: "ECIL X Roads",
        To: "Kondapur",
        UP_Distance: "33.5",
        DN_Distance: "34.7",
        Route_Status: "",
    },

    "_16C_38T": {
        RouteNo: "16C/38T",
        From: "ECIL X Roads",
        To: SEC_BS,
        UP_Distance: "13.5",
        DN_Distance: "13.8",
        Route_Status: "",
    },

    "_16C_47L": {
        RouteNo: "16C/47L",
        From: "ECIL X Roads",
        To: "Manikonda",
        UP_Distance: "33",
        DN_Distance: "32.9",
        Route_Status: "",
    },

    "_16C_49M": {
        RouteNo: "16C/49M",
        From: "ECIL X Roads",
        To: "Mehdipatnam",
        UP_Distance: "26.3",
        DN_Distance: "26.4",
        Route_Status: "",
    },

    "_16C_219": {
        RouteNo: "16C/219",
        From: "ECIL X Roads",
        To: "Patancheruvu",
        UP_Distance: "44.6",
        DN_Distance: "45.3",
        Route_Status: "",
    },

    "_16C_281": {
        RouteNo: "16C/281",
        From: SEC_BS,
        To: "Ghatkesar",
        UP_Distance: "29.8",
        DN_Distance: "30",
        Route_Status: "",
    },

    "_16CR": {
        RouteNo: "16CR",
        From: SEC_BS,
        To: "ECIL X Roads",
        UP_Distance: "13.9",
        DN_Distance: "15.1",
        Route_Status: "",
    },

    "_16CR_38T": {
        RouteNo: "16CR/38T",
        From: "ECIL X Roads",
        To: SEC_RTF,
        UP_Distance: "14.7",
        DN_Distance: "14.5",
        Route_Status: "",
    },

    "_16CD": {
        RouteNo: "16CD",
        From: SEC_BS,
        To: "Ambedkar Nagar",
        UP_Distance: "21",
        DN_Distance: "21.8",
        Route_Status: "",
    },

    "_16CD_5K": {
        RouteNo: "16CD/5K",
        From: "Ambedkar Nagar",
        To: "Mehdipatnam",
        UP_Distance: "32.2",
        DN_Distance: "31.9",
        Route_Status: "",
    },

    "_16CD_49M": {
        RouteNo: "16CD/49M",
        From: "Ambedkar Nagar",
        To: "Mehdipatnam",
        UP_Distance: "34.3",
        DN_Distance: "33.9",
        Route_Status: "",
    },

    "_16D": {
        RouteNo: "16D",
        From: SEC_BS,
        To: "Ambedkar Nagar",
        UP_Distance: "17.3",
        DN_Distance: "18.3",
        Route_Status: "",
    },

    "_16D_5K": {
        RouteNo: "16D/5K",
        From: "Ambedkar Nagar",
        To: "Mehdipatnam",
        UP_Distance: "28.7",
        DN_Distance: "28.2",
        Route_Status: "",
    },

    "_16D_24B": {
        RouteNo: "16D/24B",
        From: SEC_BS,
        To: SEC_GRD,
        UP_Distance: "34.3",
        DN_Distance: "35.4",
        Route_Status: "Regular",
    },

    "_16D_49M": {
        RouteNo: "16D/49M",
        From: "Ambedkar Nagar",
        To: "Mehdipatnam",
        UP_Distance: "30.8",
        DN_Distance: "30.2",
        Route_Status: "",
    },

    "_16ES": {
        RouteNo: "16ES",
        From: "ECIL X Roads",
        To: "Irrum Manzil",
        UP_Distance: "22",
        DN_Distance: "21.4",
        Route_Status: "",
    },

    "_16H": {
        RouteNo: "16H",
        From: SEC_BS,
        To: "ECIL X Roads",
        UP_Distance: "12.6",
        DN_Distance: "13.7",
        Route_Status: "Regular",
    },

    "_16H_47L": {
        RouteNo: "16H/47L",
        From: "ECIL X Roads",
        To: "Manikonda",
        UP_Distance: "32.9",
        DN_Distance: "32",
        Route_Status: "",
    },

    "_16H_49M": {
        RouteNo: "16H/49M",
        From: "ECIL X Roads",
        To: "Mehdipatnam",
        UP_Distance: "26.2",
        DN_Distance: "25.5",
        Route_Status: "Regular",
    },

    "_16NY": {
        RouteNo: "16NY",
        From: SEC_BS,
        To: "Yapral",
        UP_Distance: "12.8",
        DN_Distance: "14.3",
        Route_Status: "",
    },

    "_16P": {
        RouteNo: "16P",
        From: SEC_BS,
        To: "Prashanth Nagar",
        UP_Distance: "6.4",
        DN_Distance: "7.5",
        Route_Status: "",
    },

    "_16PX": {
        RouteNo: "16PX",
        From: SEC_BS,
        To: SEC_BS,
        UP_Distance: "14.1",
        DN_Distance: "14.1",
        Route_Status: "Terminated",
    },

    "_16R_20": {
        RouteNo: "16R/20",
        From: "ECIL X Roads",
        To: "Secretariate",
        UP_Distance: "19.3",
        DN_Distance: "18.2",
        Route_Status: "",
    },

    "_16S_10YF": {
        RouteNo: "16S/10YF",
        From: "Safilguda",
        To: "Borabanda",
        UP_Distance: "20.7",
        DN_Distance: "20.9",
        Route_Status: "",
    },

    "_17": {
        RouteNo: "17",
        From: SEC_BS,
        To: "ECIL X Roads",
        UP_Distance: "10.3",
        DN_Distance: "13",
        Route_Status: "",
    },

    "_17_219": {
        RouteNo: "17/219",
        From: "ECIL X Roads",
        To: "Patancheruvu",
        UP_Distance: "44.4",
        DN_Distance: "43.8",
        Route_Status: "",
    },

    "_17CS": {
        RouteNo: "17CS",
        From: SEC_BS,
        To: "Cherlapally",
        UP_Distance: "19.9",
        DN_Distance: "20.1",
        Route_Status: "",
    },

    "_17D": {
        RouteNo: "17D",
        From: SEC_BS,
        To: "Ambedkar Nagar",
        UP_Distance: "19.7",
        DN_Distance: "21.7",
        Route_Status: "Regular",
    },

    "_17DH": {
        RouteNo: "17DH",
        From: SEC_BS,
        To: "Balaji Nagar",
        UP_Distance: "22.2",
        DN_Distance: "24.2",
        Route_Status: "Regular",
    },

    "_17DS": {
        RouteNo: "17DS",
        From: SEC_BS,
        To: "Balaji Nagar",
        UP_Distance: "23.2",
        DN_Distance: "24",
        Route_Status: "",
    },

    "_17DV": {
        RouteNo: "17DV",
        From: SEC_BS,
        To: "Vikas Nagar",
        UP_Distance: "21.1",
        DN_Distance: "22.4",
        Route_Status: "",
    },

    "_17H": {
        RouteNo: "17H",
        From: SEC_BS,
        To: "Kushaiguda",
        UP_Distance: "13.1",
        DN_Distance: "14.9",
        Route_Status: "Regular",
    },

    "_17H_10H": {
        RouteNo: "17H/10H",
        From: "ECIL X Roads",
        To: "Kondapur",
        UP_Distance: "33.2",
        DN_Distance: "34.3",
        Route_Status: "Terminated",
    },

    "_17H_29B": {
        RouteNo: "17H/29B",
        From: "ECIL X Roads",
        To: "Jeedimetla",
        UP_Distance: "29.7",
        DN_Distance: "28.2",
        Route_Status: "",
    },

    "_17H_47W": {
        RouteNo: "17H/47W",
        From: "ECIL X Roads",
        To: "Waverock",
        UP_Distance: "39.8",
        DN_Distance: "40.5",
        Route_Status: "",
    },

    "_17H_219": {
        RouteNo: "17H/219",
        From: "ECIL X Roads",
        To: "Patancheruvu",
        UP_Distance: "44.4",
        DN_Distance: "43.8",
        Route_Status: "",
    },

    "_17H_242": {
        RouteNo: "17H/242",
        From: SEC_BS,
        To: "Keesaragutta",
        UP_Distance: "30.4",
        DN_Distance: "31.9",
        Route_Status: "Regular",
    },

    "_17H_496": {
        RouteNo: "17H/496",
        From: SEC_BS,
        To: "Jiyapally",
        UP_Distance: "34.4",
        DN_Distance: "36",
        Route_Status: "",
    },

    "_17HC": {
        RouteNo: "17HC",
        From: SEC_BS,
        To: "Cherlapally",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_17HN": {
        RouteNo: "17HN",
        From: SEC_BS,
        To: "ECIL X Roads",
        UP_Distance: "15.4",
        DN_Distance: "16.1",
        Route_Status: "",
    },

    "_17RH": {
        RouteNo: "17RH",
        From: 'Tarnaka',
        To: "Rampally X Roads",
        UP_Distance: "13.3",
        DN_Distance: "13.4",
        Route_Status: "",
    },

    "_17S": {
        RouteNo: "17S",
        From: SEC_BS,
        To: "Kushaiguda",
        UP_Distance: "14.1",
        DN_Distance: "14.7",
        Route_Status: "Regular",
    },

    "_17V": {
        RouteNo: "17V",
        From: SEC_BS,
        To: "Vikas Nagar",
        UP_Distance: "20.1",
        DN_Distance: "22.6",
        Route_Status: "",
    },

    "_18": {
        RouteNo: "18",
        From: SEC_RTF,
        To: "Uppal",
        UP_Distance: "8.7",
        DN_Distance: "10.2",
        Route_Status: "",
    },

    "_18_10KJ": {
        RouteNo: "18/10KJ",
        From: "Uppal Depot",
        To: "Jagathgirigutta",
        UP_Distance: "29.6",
        DN_Distance: "29.8",
        Route_Status: "",
    },

    "_18_47U": {
        RouteNo: "18/47U",
        From: "Boduppal",
        To: "AOU University",
        UP_Distance: "29.9",
        DN_Distance: "27.4",
        Route_Status: "",
    },

    "_18_272G": {
        RouteNo: "18/272G",
        From: "Uppal",
        To: "Gandimaisamma",
        UP_Distance: "32.6",
        DN_Distance: "31.1",
        Route_Status: "",
    },

    "_18_283S": {
        RouteNo: "18/283S",
        From: SEC_RTF,
        To: "Korremula",
        UP_Distance: "20.9",
        DN_Distance: "21.1",
        Route_Status: "",
    },

    "_18B": {
        RouteNo: "18B",
        From: SEC_RTF,
        To: "CCMB Colony",
        UP_Distance: "14",
        DN_Distance: "15.2",
        Route_Status: "",
    },

    "_18C": {
        RouteNo: "18C",
        From: SEC_RTF,
        To: "Chengicherla",
        UP_Distance: "15.6",
        DN_Distance: "17",
        Route_Status: "Regular",
    },

    "_18CR": {
        RouteNo: "18CR",
        From: SEC_RTF,
        To: CRPLSTN,
        UP_Distance: "20.6",
        DN_Distance: "22",
        Route_Status: "",
    },

    "_18C_10H": {
        RouteNo: "18C/10H",
        From: "Chengicherla",
        To: "Kondapur",
        UP_Distance: "37",
        DN_Distance: "36.7",
        Route_Status: "",
    },

    "_18C_30": {
        RouteNo: "18C/30",
        From: "Chengicherla",
        To: "Jagathgirigutta",
        UP_Distance: "32.8",
        DN_Distance: "31.2",
        Route_Status: "",
    },

    "_18C_219": {
        RouteNo: "18C/219",
        From: "Chengicherla",
        To: "Patancheruvu",
        UP_Distance: "48.2",
        DN_Distance: "47.4",
        Route_Status: "",
    },

    "_18C_229": {
        RouteNo: "18C/229",
        From: "Chengicherla",
        To: "Medchal",
        UP_Distance: "43.9",
        DN_Distance: "41.9",
        Route_Status: "",
    },

    "_18J": {
        RouteNo: "18J",
        From: "Uppal",
        To: JBS,
        UP_Distance: "12.5",
        DN_Distance: "10.8",
        Route_Status: "",
    },

    "_18J_300": {
        RouteNo: "18J/300",
        From: JBS,
        To: "Mehdipatnam",
        UP_Distance: "41.7",
        DN_Distance: "42.1",
        Route_Status: "",
    },

    "_18R": {
        RouteNo: "18R",
        From: "Ramanthapur Church Colony",
        To: JBS,
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_18V": {
        RouteNo: "18V",
        From: SEC_RTF,
        To: "Venkatreddy Nagar",
        UP_Distance: "11.1",
        DN_Distance: "10.8",
        Route_Status: "",
    },

    "_18VJ": {
        RouteNo: "18VJ",
        From: "Venkatreddy Nagar",
        To: JBS,
        UP_Distance: "13.1",
        DN_Distance: "12.8",
        Route_Status: "Regular",
    },

    "_18VS": {
        RouteNo: "18VS",
        From: SEC_RTF,
        To: "Ramanthapur",
        UP_Distance: "12.4",
        DN_Distance: "10.9",
        Route_Status: "",
    },

    "_18X": {
        RouteNo: "18X",
        From: UPLX,
        To: CRPLSTN,
        UP_Distance: "10.9",
        DN_Distance: "11.8",
        Route_Status: "",
    },

    "_19F": {
        RouteNo: "19F",
        From: "Mehdipatnam",
        To: "Borabanda",
        UP_Distance: "11.6",
        DN_Distance: "12.5",
        Route_Status: "Regular",
    },

    "_19K": {
        RouteNo: "19K",
        From: "Mehdipatnam",
        To: "KPHB 4TH PHASE",
        UP_Distance: "18.4",
        DN_Distance: "18.9",
        Route_Status: "Regular",
    },

    "_19K_288D": {
        RouteNo: "19K/288D",
        From: "Kukatpally",
        To: "Chilkoor Balaji Temple",
        UP_Distance: "34",
        DN_Distance: "33.9",
        Route_Status: "",
    },

    "_19KG": {
        RouteNo: "19KG",
        From: "Mehdipatnam",
        To: "Gokul Plots",
        UP_Distance: "18.3",
        DN_Distance: "19",
        Route_Status: "",
    },

    "_19KJ": {
        RouteNo: "19KJ",
        From: "Mehdipatnam",
        To: "Jagathgirigutta",
        UP_Distance: "17.3",
        DN_Distance: "17.3",
        Route_Status: "",
    },

    "_19KM": {
        RouteNo: "19KM",
        From: "Mehdipatnam",
        To: MYPX,
        UP_Distance: "18.8",
        DN_Distance: "19",
        Route_Status: "",
    },

    "_19M": {
        RouteNo: "19M",
        From: "Mehdipatnam",
        To: "KPHB 4TH PHASE",
        UP_Distance: "18.2",
        DN_Distance: "18.9",
        Route_Status: "Regular",
    },

    "_19MP": {
        RouteNo: "19MP",
        From: "Mehdipatnam",
        To: "Pragathi Nagar",
        UP_Distance: "21.8",
        DN_Distance: "20.7",
        Route_Status: "",
    },

    "_19S": {
        RouteNo: "19S",
        From: "Mehdipatnam",
        To: "Sanath Nagar",
        UP_Distance: "11",
        DN_Distance: "10.7",
        Route_Status: "",
    },

    "_19S_505": {
        RouteNo: "19S/505",
        From: "Sanath Nagar",
        To: "Shankarpally",
        UP_Distance: "47.8",
        DN_Distance: "48.1",
        Route_Status: "",
    },

    "_19YF": {
        RouteNo: "19YF",
        From: "Mehdipatnam",
        To: "Borabanda",
        UP_Distance: "11.5",
        DN_Distance: "11.7",
        Route_Status: "",
    },

    "_20_15H": {
        RouteNo: "20/15H",
        From: "Secretariate",
        To: "Kushaiguda",
        UP_Distance: "18.1",
        DN_Distance: "19.4",
        Route_Status: "",
    },

    "_20_15D": {
        RouteNo: "20/15D",
        From: "Mehdipatnam",
        To: "Ambedkar Nagar",
        UP_Distance: "29.4",
        DN_Distance: "31.1",
        Route_Status: "",
    },

    "_20_16": {
        RouteNo: "20/16",
        From: "Irrum Manzil",
        To: "Safilguda",
        UP_Distance: "14.9",
        DN_Distance: "16.8",
        Route_Status: "",
    },

    "_20_16A": {
        RouteNo: "20/16A",
        From: "Afzalgunj",
        To: "ECIL X Roads",
        UP_Distance: "23.6",
        DN_Distance: "24.6",
        Route_Status: "",
    },

    "_20_16R": {
        RouteNo: "20/16R",
        From: "Secretariate",
        To: "ECIL X Roads",
        UP_Distance: "18.2",
        DN_Distance: "19.3",
        Route_Status: "",
    },

    "_20_250C": {
        RouteNo: "20/250C",
        From: "Secretariate",
        To: "Cherlapally",
        UP_Distance: "21.2",
        DN_Distance: "21.1",
        Route_Status: "",
    },

    "_20_280": {
        RouteNo: "20/280",
        From: "Secretariate",
        To: "Ghatkesar",
        UP_Distance: "28",
        DN_Distance: "29.2",
        Route_Status: "",
    },

    "_20P": {
        RouteNo: "20P",
        From: SEC_RTF,
        To: "Nampally",
        UP_Distance: "9.6",
        DN_Distance: "9.5",
        Route_Status: "",
    },

    "_21W": {
        RouteNo: "21W",
        From: SEC_GRD,
        To: "West Venkatapuram",
        UP_Distance: "9.1",
        DN_Distance: "10",
        Route_Status: "",
    },

    "_22": {
        RouteNo: "22",
        From: SEC_GRD,
        To: "Hakimpet",
        UP_Distance: "15.3",
        DN_Distance: "15.5",
        Route_Status: "",
    },

    "_22_24S": {
        RouteNo: "22/24S",
        From: "Hakimpet",
        To: "ECIL X Roads",
        UP_Distance: "17.1",
        DN_Distance: "17.7",
        Route_Status: "",
    },

    "_22_49E": {
        RouteNo: "22/49E",
        From: "Risala Bazar",
        To: "Irrum Manzil",
        UP_Distance: "17.8",
        DN_Distance: "17.9",
        Route_Status: "",
    },

    "_22_90L": {
        RouteNo: "22/90L",
        From: "Hakimpet",
        To: "BDL",
        UP_Distance: "37.8",
        DN_Distance: "37.7",
        Route_Status: "",
    },

    "_22_281": {
        RouteNo: "22/281",
        From: "Hakimpet",
        To: "Ghatkesar",
        UP_Distance: "35.1",
        DN_Distance: "35.3",
        Route_Status: "",
    },

    "_22D": {
        RouteNo: "22D",
        From: SEC_GRD,
        To: "MB Dhargah",
        UP_Distance: "14.8",
        DN_Distance: "15",
        Route_Status: "",
    },

    "_22E_229": {
        RouteNo: "22E/229",
        From: "ECIL X Roads",
        To: "Medchal",
        UP_Distance: "27.9",
        DN_Distance: "26.1",
        Route_Status: "",
    },

    "_22K": {
        RouteNo: "22K",
        From: SEC_GRD,
        To: "Rajiv Gruhakalpa",
        UP_Distance: "15.2",
        DN_Distance: "15.4",
        Route_Status: "",
    },

    "_23B": {
        RouteNo: "23B",
        From: SEC_GRD,
        To: "Bhudevi Nagar",
        UP_Distance: "8",
        DN_Distance: "8",
        Route_Status: "",
    },

    "_23BK": {
        RouteNo: "23BK",
        From: SEC_GRD,
        To: "Kistamma Enclave",
        UP_Distance: "9.4",
        DN_Distance: "9.5",
        Route_Status: "",
    },

    "_23BS": {
        RouteNo: "23BS",
        From: SEC_GRD,
        To: "Suchitra",
        UP_Distance: "12.1",
        DN_Distance: "12.4",
        Route_Status: "",
    },

    "_23GF": {
        RouteNo: "23GF",
        From: SEC_GRD,
        To: "Green Fields",
        UP_Distance: "8.6",
        DN_Distance: "8.7",
        Route_Status: "",
    },

    "_23GS": {
        RouteNo: "23GS",
        From: SEC_GRD,
        To: "Suchitra",
        UP_Distance: "12.5",
        DN_Distance: "12.9",
        Route_Status: "",
    },

    "_23K": {
        RouteNo: "23K",
        From: SEC_GRD,
        To: "Kistamma Enclave",
        UP_Distance: "9.4",
        DN_Distance: "9.5",
        Route_Status: "",
    },

    "_23T": {
        RouteNo: "23T",
        From: SEC_GRD,
        To: "Telecom Colony",
        UP_Distance: "8.3",
        DN_Distance: "8.3",
        Route_Status: "",
    },

    "_23S_219": {
        RouteNo: "23S/219",
        From: "ECIL X Roads",
        To: "Patancheruvu",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_24": {
        RouteNo: "24",
        From: SEC_GRD,
        To: "Yapral",
        UP_Distance: "11",
        DN_Distance: "11.1",
        Route_Status: "",
    },

    "_24B": {
        RouteNo: "24B",
        From: SEC_GRD,
        To: "Balaji Nagar",
        UP_Distance: "14.5",
        DN_Distance: "14.4",
        Route_Status: "",
    },

    "_24B_16D": {
        RouteNo: "24B/16D",
        From: SEC_GRD,
        To: SEC_BS,
        UP_Distance: "35.4",
        DN_Distance: "34.3",
        Route_Status: "",
    },

    "_24B_211RG": {
        RouteNo: "24B/211RG",
        From: SEC_GRD,
        To: "RG Colony",
        UP_Distance: "23.3",
        DN_Distance: "22.8",
        Route_Status: "",
    },

    "_24B_281": {
        RouteNo: "24B/281",
        From: SEC_GRD,
        To: "Ghatkesar",
        UP_Distance: "31.6",
        DN_Distance: "32.5",
        Route_Status: "",
    },

    "_24BA": {
        RouteNo: "24BA",
        From: SEC_GRD,
        To: "Ambedkar Nagar",
        UP_Distance: "17.1",
        DN_Distance: "17.2",
        Route_Status: "",
    },

    "_24BJ": {
        RouteNo: "24BJ",
        From: SEC_GRD,
        To: "BJR Nagar",
        UP_Distance: "16.2",
        DN_Distance: "16.3",
        Route_Status: "",
    },

    "_24E": {
        RouteNo: "24E",
        From: SEC_BS,
        To: "ECIL X Roads",
        UP_Distance: "16.5",
        DN_Distance: "15.6",
        Route_Status: "",
    },

    "_24J": {
        RouteNo: "24J",
        From: SEC_GRD,
        To: "ECIL X Roads",
        UP_Distance: "12.3",
        DN_Distance: "12.4",
        Route_Status: "",
    },

    "_24L_281": {
        RouteNo: "24L/281",
        From: SEC_GRD,
        To: "Ghatkesar",
        UP_Distance: "31.2",
        DN_Distance: "32.9",
        Route_Status: "",
    },

    "_24N_219": {
        RouteNo: "24N/219",
        From: "ECIL X Roads",
        To: "Patancheruvu",
        UP_Distance: "37.6",
        DN_Distance: "37.5",
        Route_Status: "",
    },

    "_24S": {
        RouteNo: "24S",
        From: "ECIL X Roads",
        To: "Suchitra",
        UP_Distance: "14.8",
        DN_Distance: "14.6",
        Route_Status: "",
    },

    "_24S_22": {
        RouteNo: "24S/22",
        From: "ECIL X Roads",
        To: "Hakimpet",
        UP_Distance: "16.7",
        DN_Distance: "16.2",
        Route_Status: "",
    },

    "_24S_273": {
        RouteNo: "24S/273",
        From: "ECIL X Roads",
        To: "Gandimaisamma",
        UP_Distance: "31",
        DN_Distance: "33.2",
        Route_Status: "",
    },

    "_24SS": {
        RouteNo: "24SS",
        From: "ECIL X Roads",
        To: "Shahpur Nagar",
        UP_Distance: "18.8",
        DN_Distance: "19.9",
        Route_Status: "",
    },

    "_25A": {
        RouteNo: "25A",
        From: SEC_GRD,
        To: "Surya Nagar",
        UP_Distance: "11.6",
        DN_Distance: "11.6",
        Route_Status: "",
    },

    "_25AJ": {
        RouteNo: "25AJ",
        From: SEC_GRD,
        To: "Jonnabanda",
        UP_Distance: "11.3",
        DN_Distance: "11.3",
        Route_Status: "",
    },

    "_25AJ_M": {
        RouteNo: "25AJ/M",
        From: SEC_GRD,
        To: "Gopal Nagar",
        UP_Distance: "12.6",
        DN_Distance: "12.6",
        Route_Status: "",
    },

    "_25M": {
        RouteNo: "25M",
        From: SEC_GRD,
        To: "Gopal Nagar",
        UP_Distance: "12.9",
        DN_Distance: "12.9",
        Route_Status: "",
    },

    "_25MS": {
        RouteNo: "25MS",
        From: SEC_GRD,
        To: "Sharan Nagar",
        UP_Distance: "15",
        DN_Distance: "15",
        Route_Status: "",
    },

    "_25P": {
        RouteNo: "25P",
        From: SEC_GRD,
        To: "Panchasheela",
        UP_Distance: "11.8",
        DN_Distance: "11.8",
        Route_Status: "",
    },

    "_25S": {
        RouteNo: "25S",
        From: SEC_GRD,
        To: "Suchitra",
        UP_Distance: "13",
        DN_Distance: "12.8",
        Route_Status: "",
    },

    "_25S_1": {
        RouteNo: "25S/1",
        From: "Suchitra",
        To: "Afzalgunj",
        UP_Distance: "22.4",
        DN_Distance: "22.8",
        Route_Status: "",
    },

    "_25S_1P": {
        RouteNo: "25S/1P",
        From: "Suchitra",
        To: "Afzalgunj",
        UP_Distance: "22.5",
        DN_Distance: "23.5",
        Route_Status: "",
    },

    "_25S_2": {
        RouteNo: "25S/2",
        From: "Suchitra",
        To: "Afzalgunj",
        UP_Distance: "24.1",
        DN_Distance: "24.4",
        Route_Status: "",
    },

    "_25S_5K": {
        RouteNo: "25S/5K",
        From: "Suchitra",
        To: "Mehdipatnam",
        UP_Distance: "22.2",
        DN_Distance: "21.9",
        Route_Status: "",
    },

    "_25S_227": {
        RouteNo: "25S/227",
        From: SEC_GRD,
        To: "Gandimaisamma",
        UP_Distance: "29.2",
        DN_Distance: "31.1",
        Route_Status: "",
    },

    "_25S_229": {
        RouteNo: "25S/229",
        From: SEC_GRD,
        To: "Medchal",
        UP_Distance: "30.9",
        DN_Distance: "28.6",
        Route_Status: "",
    },

    "_25S_281": {
        RouteNo: "25S/281",
        From: "Suchitra",
        To: "Ghatkesar",
        UP_Distance: "32.8",
        DN_Distance: "33.7",
        Route_Status: "",
    },

    "_26M": {
        RouteNo: "26M",
        From: SEC_ALF,
        To: "Old Bowenpally",
        UP_Distance: "8.8",
        DN_Distance: "9",
        Route_Status: "",
    },

    "_26M_49M": {
        RouteNo: "26M/49M",
        From: "Old Bowenpally",
        To: "Mehdipatnam",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_26N": {
        RouteNo: "26N",
        From: SEC_ALF,
        To: "Old Bowenpally",
        UP_Distance: "8.3",
        DN_Distance: "9.2",
        Route_Status: "",
    },

    "_29B": {
        RouteNo: "29B",
        From: SEC_GRD,
        To: "Jeedimetla",
        UP_Distance: "15.9",
        DN_Distance: "15.9",
        Route_Status: "",
    },

    "_29B_17H": {
        RouteNo: "29B/17H",
        From: "Jeedimetla",
        To: "ECIL X Roads",
        UP_Distance: "28.2",
        DN_Distance: "29.7",
        Route_Status: "",
    },

    "_29B_250C": {
        RouteNo: "29B/250C",
        From: "Gandimaisamma",
        To: "Cherlapally Station",
        UP_Distance: "40.1",
        DN_Distance: "39.6",
        Route_Status: "",
    },

    "_29B_272G": {
        RouteNo: "29B/272G",
        From: SEC_GRD,
        To: "Gandimaisamma",
        UP_Distance: "21.9",
        DN_Distance: "21.9",
        Route_Status: "",
    },

    "_29B_272I": {
        RouteNo: "29B/272I",
        From: SEC_GRD,
        To: "Indiramma Colony",
        UP_Distance: "22.7",
        DN_Distance: "22.6",
        Route_Status: "",
    },

    "_29B_272J": {
        RouteNo: "29B/272J",
        From: SEC_GRD,
        To: "JNNURM Colony",
        UP_Distance: "31.4",
        DN_Distance: "30.1",
        Route_Status: "",
    },

    "_29Q": {
        RouteNo: "29Q",
        From: "Bala Nagar",
        To: "Quthbullapur",
        UP_Distance: "5",
        DN_Distance: "5",
        Route_Status: "",
    },

    "_29S": {
        RouteNo: "29S",
        From: SEC_GRD,
        To: "Subhash Nagar",
        UP_Distance: "16.3",
        DN_Distance: "16.3",
        Route_Status: "",
    },

    "_30": {
        RouteNo: "30",
        From: SEC_GRD,
        To: "Jagathgirigutta",
        UP_Distance: "15.3",
        DN_Distance: "15.1",
        Route_Status: "",
    },

    "_30S": {
        RouteNo: "30S",
        From: SEC_GRD,
        To: "Srinivas Nagar",
        UP_Distance: "16.5",
        DN_Distance: "16.3",
        Route_Status: "",
    },

    "_30_18C": {
        RouteNo: "30/18C",
        From: "Jagathgirigutta",
        To: "Chengicherla",
        UP_Distance: "31.2",
        DN_Distance: "32.8",
        Route_Status: "",
    },

    "_30_250C": {
        RouteNo: "30/250C",
        From: "Jagathgirigutta",
        To: "Cherlapally Station",
        UP_Distance: "33.3",
        DN_Distance: "33",
        Route_Status: "",
    },

    "_30_280": {
        RouteNo: "30/280",
        From: "Jagathgirigutta",
        To: "Ghatkesar",
        UP_Distance: "38.2",
        DN_Distance: "39.3",
        Route_Status: "",
    },

    /* 31 Series */

    "_31": {
        RouteNo: "31",
        From: SEC_GRD,
        To: "Pragathi Nagar",
        UP_Distance: "21.9",
        DN_Distance: "20.9",
        Route_Status: "",
    },

    /* 37 Series */

    "_37": {
        RouteNo: "37",
        From: SEC_BS,
        To: "ECIL X Roads",
        UP_Distance: "15",
        DN_Distance: "14.9",
        Route_Status: "",
    },

    "_37_8": {
        RouteNo: "37/8",
        From: "Kushaiguda",
        To: "Gandhi Bhavan",
        UP_Distance: "20.8",
        DN_Distance: "20.2",
        Route_Status: "",
    },

    /* 38 Series */
    "_38EX": {
        RouteNo: "38EX",
        From: SEC_RTF,
        To: SEC_RTF,
        UP_Distance: "12.1",
        DN_Distance: "12.2",
        Route_Status: "",
    },

    "_38M": {
        RouteNo: "38M",
        From: SEC_RTF,
        To: "Mahindra Hills",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_38X": {
        RouteNo: "38X",
        From: SEC_RTF,
        To: SEC_RTF,
        UP_Distance: "12.2",
        DN_Distance: "12.1",
        Route_Status: "",
    },

    "_38T": {
        RouteNo: "38T",
        From: SEC_RTF,
        To: "Tukaramgate",
        UP_Distance: "3.8",
        DN_Distance: "3.8",
        Route_Status: "",
    },

    "_38T_16C": {
        RouteNo: "38T/16C",
        From: SEC_RTF,
        To: "ECIL X Roads",
        UP_Distance: "13.8",
        DN_Distance: "13.5",
        Route_Status: "",
    },

    "_38T_16CR": {
        RouteNo: "38T/16CR",
        From: SEC_RTF,
        To: "ECIL X Roads",
        UP_Distance: "14.5",
        DN_Distance: "14.7",
        Route_Status: "",
    },

    "_40": {
        RouteNo: "40",
        From: SEC_ALF,
        To: "Koti",
        UP_Distance: "10",
        DN_Distance: "11",
        Route_Status: "",
    },

    "_41C_9X": {
        RouteNo: "41C/9X",
        From: "Asbestos Colony",
        To: CBS,
        UP_Distance: "22.5",
        DN_Distance: "22.8",
        Route_Status: "",
    },

    "_44X": {
        RouteNo: "44X",
        From: SEC_RTF,
        To: "Gangaputra Colony",
        UP_Distance: "3",
        DN_Distance: "2.7",
        Route_Status: "",
    },

    "_45F": {
        RouteNo: "45F",
        From: "Koti",
        To: "Borabanda",
        UP_Distance: "21.5",
        DN_Distance: "21",
        Route_Status: "",
    },

    "_46": {
        RouteNo: "46",
        From: SEC_ALF,
        To: "Patigadda",
        UP_Distance: "4.2",
        DN_Distance: "5.5",
        Route_Status: "",
    },

    "_47D_224": {
        RouteNo: "47D/224",
        From: "Dargah",
        To: "Mayuri Nagar",
        UP_Distance: "26.4",
        DN_Distance: "24.9",
        Route_Status: "",
    },

    "_47L": {
        RouteNo: "47L",
        From: SEC_ALF,
        To: "Manikonda",
        UP_Distance: "19.1",
        DN_Distance: "20.8",
        Route_Status: "",
    },

    "_47L_16A": {
        RouteNo: "47L/16A",
        From: "Manikonda",
        To: "ECIL X Roads",
        UP_Distance: "34.5",
        DN_Distance: "33.6",
        Route_Status: "",
    },

    "_47L_16C": {
        RouteNo: "47L/16C",
        From: "Manikonda",
        To: "ECIL X Roads",
        UP_Distance: "33",
        DN_Distance: "32.9",
        Route_Status: "",
    },

    "_47L_16H": {
        RouteNo: "47L/16H",
        From: "Manikonda",
        To: "ECIL X Roads",
        UP_Distance: "32",
        DN_Distance: "32.9",
        Route_Status: "",
    },

    "_47L_90D": {
        RouteNo: "47L/90D",
        From: "Film Nagar",
        To: "Dilshuknagar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_47U_18": {
        RouteNo: "47U/18",
        From: "AOU University",
        To: "Boduppal",
        UP_Distance: "27.4",
        DN_Distance: "29.9",
        Route_Status: "",
    },

    "_47Y": {
        RouteNo: "47Y",
        From: SEC_ALF,
        To: "Manikonda",
        UP_Distance: "19.4",
        DN_Distance: "22.6",
        Route_Status: "",
    },

    "_47YM": {
        RouteNo: "47YM",
        From: SEC_ALF,
        To: "Manchirevula",
        UP_Distance: "25.2",
        DN_Distance: "28.3",
        Route_Status: "",
    },

    "_47YN": {
        RouteNo: "47YN",
        From: SEC_ALF,
        To: "Nanakramguda",
        UP_Distance: "29.5",
        DN_Distance: "32.9",
        Route_Status: "",
    },

    "_47W": {
        RouteNo: "47W",
        From: SEC_ALF,
        To: "Waverock",
        UP_Distance: "25.9",
        DN_Distance: "28.7",
        Route_Status: "",
    },

    "_47W_6N": {
        RouteNo: "47W/6N",
        From: "Waverock",
        To: "ECIL X Roads",
        UP_Distance: "42.4",
        DN_Distance: "39.4",
        Route_Status: "",
    },

    "_47W_16A": {
        RouteNo: "47W/16A",
        From: "Waverock",
        To: "ECIL X Roads",
        UP_Distance: "42",
        DN_Distance: "40.8",
        Route_Status: "",
    },

    "_47W_17H": {
        RouteNo: "47W/17H",
        From: "Waverock",
        To: "ECIL X Roads",
        UP_Distance: "40.5",
        DN_Distance: "39.8",
        Route_Status: "",
    },

    "_49": {
        RouteNo: "49",
        From: SEC_ALF,
        To: "Nampally",
        UP_Distance: "12.4",
        DN_Distance: "13.5",
        Route_Status: "",
    },

    "_49_250": {
        RouteNo: "49/250",
        From: "Nampally",
        To: "ECIL X Roads",
        UP_Distance: "26.9",
        DN_Distance: "26.8",
        Route_Status: "",
    },

    "_49A": {
        RouteNo: "49A",
        From: SEC_ALF,
        To: "Afzalgunj",
        UP_Distance: "14.6",
        DN_Distance: "15.8",
        Route_Status: "",
    },

    "_49AG": {
        RouteNo: "49AG",
        From: SEC_ALF,
        To: "Aramghar",
        UP_Distance: "23.1",
        DN_Distance: "24.3",
        Route_Status: "",
    },

    "_49E_22": {
        RouteNo: "49E/22",
        From: "Irrum Manzil",
        To: "Risala Bazar",
        UP_Distance: "17.9",
        DN_Distance: "17.8",
        Route_Status: "",
    },

    "_49M": {
        RouteNo: "49M",
        From: SEC_ALF,
        To: "Mehdipatnam",
        UP_Distance: "12.5",
        DN_Distance: "13.5",
        Route_Status: "",
    },

    "_49M_16A": {
        RouteNo: "49M/16A",
        From: "Mehdipatnam",
        To: "ECIL X Roads",
        UP_Distance: "26.4",
        DN_Distance: "27.1",
        Route_Status: "",
    },

    "_49M_16C": {
        RouteNo: "49M/16C",
        From: "Mehdipatnam",
        To: "ECIL X Roads",
        UP_Distance: "26.4",
        DN_Distance: "26.3",
        Route_Status: "",
    },

    "_49M_16CD": {
        RouteNo: "49M/16CD",
        From: "Mehdipatnam",
        To: "Ambedkar Nagar",
        UP_Distance: "33.9",
        DN_Distance: "34.3",
        Route_Status: "",
    },

    "_49M_16D": {
        RouteNo: "49M/16D",
        From: "Mehdipatnam",
        To: "Ambedkar Nagar",
        UP_Distance: "30.2",
        DN_Distance: "30.8",
        Route_Status: "",
    },

    "_49M_16H": {
        RouteNo: "49M/16H",
        From: "Mehdipatnam",
        To: "ECIL X Roads",
        UP_Distance: "25.5",
        DN_Distance: "26.2",
        Route_Status: "",
    },

    "_49M_26M": {
        RouteNo: "49M/26M",
        From: "Mehdipatnam",
        To: "Old Bowenpally",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_49M_92A": {
        RouteNo: "49M/92A",
        From: SEC_ALF,
        To: "Aramghar",
        UP_Distance: "23.1",
        DN_Distance: "24.2",
        Route_Status: "",
    },

    "_49M_188B": {
        RouteNo: "49M/188B",
        From: SEC_ALF,
        To: "Bairagiguda",
        UP_Distance: "21.7",
        DN_Distance: "22.7",
        Route_Status: "",
    },

    "_49M_229": {
        RouteNo: "49M/229",
        From: "Mehdipatnam",
        To: "Medchal",
        UP_Distance: "34",
        DN_Distance: "33.5",
        Route_Status: "",
    },

    "_49M_250": {
        RouteNo: "49M/250",
        From: "Mehdipatnam",
        To: "ECIL X Roads",
        UP_Distance: "26.9",
        DN_Distance: "26.9",
        Route_Status: "",
    },

    "_49M_250C": {
        RouteNo: "49M/250C",
        From: "Mehdipatnam",
        To: "Cherlapally",
        UP_Distance: "28.4",
        DN_Distance: "28.4",
        Route_Status: "",
    },

    "_49M_250D": {
        RouteNo: "49M/250D",
        From: "Mehdipatnam",
        To: "Ambedkar Nagar",
        UP_Distance: "34.4",
        DN_Distance: "34.6",
        Route_Status: "",
    },

    "_49MG": {
        RouteNo: "49MG",
        From: SEC_ALF,
        To: "Gachibowli",
        UP_Distance: "22.2",
        DN_Distance: "23.3",
        Route_Status: "",
    },

    "_49MT": {
        RouteNo: "49MT",
        From: SEC_ALF,
        To: "Tallagadda",
        UP_Distance: "14.5",
        DN_Distance: "16.5",
        Route_Status: "",
    },

    "_49MT_250": {
        RouteNo: "49MT/250",
        From: "Tallagadda",
        To: "ECIL X Roads",
        UP_Distance: "29.9",
        DN_Distance: "28.9",
        Route_Status: "",
    },

    "_50B": {
        RouteNo: "50B",
        From: SEC_RTF,
        To: "Chengicherla",
        UP_Distance: "15.3",
        DN_Distance: "15.3",
        Route_Status: "",
    },

    "_65_116GA": {
        RouteNo: "65/116GA",
        From: "Afzalgunj",
        To: "Gowli Dhoddi",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_65M_116G": {
        RouteNo: "65M/116G",
        From: CBS,
        To: "Gowli Dhoddi",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_65M_123": {
        RouteNo: "65M/123",
        From: "Afzalgunj",
        To: "Manchirevula",
        UP_Distance: "19.4",
        DN_Distance: "19.8",
        Route_Status: "",
    },

    "_65MG": {
        RouteNo: "65MG",
        From: "Charminar",
        To: "Golconda",
        UP_Distance: "19.3",
        DN_Distance: "19.8",
        Route_Status: "",
    },

    "_66G": {
        RouteNo: "66G",
        From: "Charminar",
        To: "Golconda",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_70_8A": {
        RouteNo: "70/8A",
        From: "Theegalakunta",
        To: SEC_ALF,
        UP_Distance: "18.4",
        DN_Distance: "16.9",
        Route_Status: "",
    },

    "_71A": {
        RouteNo: "71A",
        From: "Afzalgunj",
        To: "Chengicherla",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_71AB": {
        RouteNo: "71AB",
        From: "Afzalgunj",
        To: "Chengicherla",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_71AC": {
        RouteNo: "71AC",
        From: "Afzalgunj",
        To: "Cherlapally Station",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_71K": {
        RouteNo: "71K",
        From: "Afzalgunj",
        To: "Kacheguda Depot",
        UP_Distance: "4.3",
        DN_Distance: "4",
        Route_Status: "",
    },

    "_72": {
        RouteNo: "72",
        From: "High Court",
        To: "Satya Nagar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_72_277D": {
        RouteNo: "72/277D",
        From: "Afzalgunj",
        To: "Ibrahimpatnam",
        UP_Distance: "33.8",
        DN_Distance: "33.7",
        Route_Status: "",
    },

    "_72H": {
        RouteNo: "72H",
        From: "Afzalgunj",
        To: "Hayathnagar",
        UP_Distance: "16.5",
        DN_Distance: "17.1",
        Route_Status: "",
    },

    "_72HK": {
        RouteNo: "72HK",
        From: "Afzalgunj",
        To: "Kuntloor",
        UP_Distance: "19.3",
        DN_Distance: "19.8",
        Route_Status: "",
    },

    "_72J": {
        RouteNo: "72J",
        From: "Afzalgunj",
        To: "Jaipuri Colony DRF",
        UP_Distance: "14.1",
        DN_Distance: "14.3",
        Route_Status: "",
    },

    "_72V": {
        RouteNo: "72V",
        From: "Afzalgunj",
        To: "NGOs colony",
        UP_Distance: "14.8",
        DN_Distance: "14.3",
        Route_Status: "",
    },

    "_75R_8A": {
        RouteNo: "75R/8A",
        From: "Rajanna Bhavi",
        To: SEC_ALF,
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_83G_272G": {
        RouteNo: "83G/272G",
        From: "Kacheguda Station",
        To: "Gandimaisamma",
        UP_Distance: "32",
        DN_Distance: "30.7",
        Route_Status: "",
    },

    "_83J": {
        RouteNo: "83J",
        From: "Kacheguda Station",
        To: "Jeedimetla",
        UP_Distance: "26.1",
        DN_Distance: "24.7",
        Route_Status: "",
    },

    "_83J_272G": {
        RouteNo: "83J/272G",
        From: "Kacheguda Station",
        To: "Gandimaisamma",
        UP_Distance: "32",
        DN_Distance: "30.7",
        Route_Status: "",
    },

    "_83JA": {
        RouteNo: "83JA",
        From: "Kacheguda Station",
        To: "Apuroopa Colony",
        UP_Distance: "27.8",
        DN_Distance: "26.4",
        Route_Status: "",
    },

    "_85_8A": {
        RouteNo: "85/8A",
        From: "Pahadi Sharif",
        To: SEC_ALF,
        UP_Distance: "25.8",
        DN_Distance: "24.2",
        Route_Status: "",
    },

    "_85P_8C": {
        RouteNo: "85P/8C",
        From: "Pahadi Sharif",
        To: SEC_ALF,
        UP_Distance: "26.3",
        DN_Distance: "25.8",
        Route_Status: "",
    },

    "_85_253L": {
        RouteNo: "85/253L",
        From: "Charminar",
        To: "Annojiguda",
        UP_Distance: "40.8",
        DN_Distance: "40.6",
        Route_Status: "",
    },

    "_85V": {
        RouteNo: "85V",
        From: "Charminar",
        To: "Venkatapur",
        UP_Distance: "8.7",
        DN_Distance: "8.5",
        Route_Status: "",
    },

    "_86A": {
        RouteNo: "86A",
        From: SEC_RTF,
        To: "Afzalgunj",
        UP_Distance: "12.6",
        DN_Distance: "12.9",
        Route_Status: "",
    },

    "_86C": {
        RouteNo: "86C",
        From: SEC_RTF,
        To: CBS,
        UP_Distance: "11.9",
        DN_Distance: "12.3",
        Route_Status: "",
    },

    "_86J": {
        RouteNo: "86J",
        From: SEC_RTF,
        To: "Jiyaguda KHT",
        UP_Distance: "18.1",
        DN_Distance: "18.6",
        Route_Status: "",
    },

    "_86K": {
        RouteNo: "86K",
        From: SEC_RTF,
        To: "Koti",
        UP_Distance: "10.7",
        DN_Distance: "11.9",
        Route_Status: "",
    },

    "_90_253T": {
        RouteNo: "90/253T",
        From: JBS,
        To: "Tukkuguda Fab City",
        UP_Distance: "42.8",
        DN_Distance: "43.2",
        Route_Status: "",
    },

    "_90_300": {
        RouteNo: "90/300",
        From: SEC_RTF,
        To: "Mehdipatnam",
        UP_Distance: "40.1",
        DN_Distance: "39.6",
        Route_Status: "",
    },

    "_90B": {
        RouteNo: "90B",
        From: SEC_CS,
        To: "Bandlaguda Depot",
        UP_Distance: "14",
        DN_Distance: "14.2",
        Route_Status: "",
    },

    "_90BE": {
        RouteNo: "90BE",
        From: "ECIL X Roads",
        To: "Badangpet",
        UP_Distance: "29.6",
        DN_Distance: "31.1",
        Route_Status: "",
    },

    "_90BK": {
        RouteNo: "90BK",
        From: JBS,
        To: "Kuntloor",
        UP_Distance: "21.8",
        DN_Distance: "22.2",
        Route_Status: "",
    },

    "_90DJ": {
        RouteNo: "90DJ",
        From: JBS,
        To: "Dilshuknagar",
        UP_Distance: "18.4",
        DN_Distance: "18.2",
        Route_Status: "",
    },

    "_90DL": {
        RouteNo: "90DL",
        From: SEC_CS,
        To: "Dilshuknagar",
        UP_Distance: "18.4",
        DN_Distance: "18.2",
        Route_Status: "",
    },

    "_90NU": {
        RouteNo: "90NU",
        From: "Dilshuknagar",
        To: UPLX,
        UP_Distance: "6.9",
        DN_Distance: "7.3",
        Route_Status: "",
    },

    "_90D_47L": {
        RouteNo: "90D/47L",
        From: "Dilshuknagar",
        To: "Film Nagar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_90U_203U": {
        RouteNo: "90U/203U",
        From: "Uppal X Roads",
        To: "Adibatla",
        UP_Distance: "26.1",
        DN_Distance: "26.6",
        Route_Status: "",
    },

    "_90CL": {
        RouteNo: "90CL",
        From: LBNR,
        To: "Cherlapally Station",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_90L": {
        RouteNo: "90L",
        From: JBS,
        To: LBNR,
        UP_Distance: "16.3",
        DN_Distance: "16.4",
        Route_Status: "",
    },

    "_90L_3K": {
        RouteNo: "90L/3K",
        From: "BDL",
        To: "ECIL X Roads",
        UP_Distance: "27.8",
        DN_Distance: "26.7",
        Route_Status: "",
    },

    "_90L_22": {
        RouteNo: "90L/22",
        From: "BDL",
        To: "Hakimpet",
        UP_Distance: "37.7",
        DN_Distance: "37.8",
        Route_Status: "",
    },

    "_90L_229": {
        RouteNo: "90L/229",
        From: LBNR,
        To: "Medchal",
        UP_Distance: "40.8",
        DN_Distance: "40.5",
        Route_Status: "",
    },

    "_90L_229S": {
        RouteNo: "90L/229S",
        From: LBNR,
        To: "Medchal",
        UP_Distance: "40.8",
        DN_Distance: "40.5",
        Route_Status: "",
    },

    "_90L_251": {
        RouteNo: "90L/251",
        From: SEC_RTF,
        To: "Shamshabad",
        UP_Distance: "37.4",
        DN_Distance: "37.6",
        Route_Status: "",
    },

    "_90LK": {
        RouteNo: "90LK",
        From: LBNR,
        To: "Kacheguda Station",
        UP_Distance: "16.5",
        DN_Distance: "17.9",
        Route_Status: "",
    },

    "_90LV": {
        RouteNo: "90LV",
        From: "NGOs Colony",
        To: JBS,
        UP_Distance: "20.8",
        DN_Distance: "20.6",
        Route_Status: "",
    },

    "_92A": {
        RouteNo: "92A",
        From: "Aramghar",
        To: "Mehdipatnam",
        UP_Distance: "10.7",
        DN_Distance: "10.6",
        Route_Status: "",
    },

    "_92A_5K": {
        RouteNo: "92A/5K",
        From: "Aramghar",
        To: SEC_ALF,
        UP_Distance: "22.2",
        DN_Distance: "21",
        Route_Status: "",
    },

    "_92A_49M": {
        RouteNo: "92A/49M",
        From: "Aramghar",
        To: SEC_ALF,
        UP_Distance: "24.2",
        DN_Distance: "23.1",
        Route_Status: "",
    },

    "_92K": {
        RouteNo: "92K",
        From: "Mehdipatnam",
        To: "Sri Ram Colony",
        UP_Distance: "16.3",
        DN_Distance: "16.3",
        Route_Status: "",
    },

    "_92R": {
        RouteNo: "92R",
        From: "Rajendra Nagar",
        To: "Mehdipatnam",
        UP_Distance: "10.6",
        DN_Distance: "10.5",
        Route_Status: "",
    },

    "_92R_5K": {
        RouteNo: "92R/5K",
        From: "Rajendra Nagar",
        To: SEC_ALF,
        UP_Distance: "21.8",
        DN_Distance: "20.7",
        Route_Status: "",
    },

    "_94C_220E": {
        RouteNo: "94C/220E",
        From: "Chandrayangutta",
        To: "Edulanagulapally",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_94R": {
        RouteNo: "94R",
        From: "Koti",
        To: "Rajendra Nagar",
        UP_Distance: "14.1",
        DN_Distance: "15.5",
        Route_Status: "",
    },

    "_94RM": {
        RouteNo: "94RM",
        From: "Koti",
        To: "Rajendra Nagar",
        UP_Distance: "14.5",
        DN_Distance: "15.9",
        Route_Status: "",
    },

    "_95": {
        RouteNo: "95",
        From: "Koti",
        To: "Aramghar",
        UP_Distance: "10.4",
        DN_Distance: "10.7",
        Route_Status: "",
    },

    "_95_3K": {
        RouteNo: "95/3K",
        From: "Aramghar",
        To: "ECIL X Roads",
        UP_Distance: "29",
        DN_Distance: "28.7",
        Route_Status: "",
    },

    "_95_3KN": {
        RouteNo: "95/3KN",
        From: "Aramghar",
        To: "ECIL X Roads",
        UP_Distance: "31.4",
        DN_Distance: "29.8",
        Route_Status: "",
    },

    "_95K": {
        RouteNo: "95K",
        From: "Koti",
        To: "Sri Ram Colony",
        UP_Distance: "16.1",
        DN_Distance: "16.4",
        Route_Status: "",
    },

    "_95M": {
        RouteNo: "95M",
        From: "Koti",
        To: "Jelpally",
        UP_Distance: "17.8",
        DN_Distance: "17",
        Route_Status: "",
    },

    "_100_299": {
        RouteNo: "100/299",
        From: "Secretariate",
        To: "Hayathnagar",
        UP_Distance: "19.8",
        DN_Distance: "21.5",
        Route_Status: "",
    },

    "_100M": {
        RouteNo: "100M",
        From: "Secretariate",
        To: "Satya Nagar",
        UP_Distance: "12.7",
        DN_Distance: "13.7",
        Route_Status: "",
    },

    "_100V": {
        RouteNo: "100V",
        From: "Secretariate",
        To: "NGOs colony",
        UP_Distance: "18.1",
        DN_Distance: "18.7",
        Route_Status: "",
    },

    "_100X": {
        RouteNo: "100X",
        From: "Dilshuknagar",
        To: "Badangpet",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_102": {
        RouteNo: "102",
        From: "Koti Womens College",
        To: "Midhani Depot",
        UP_Distance: "6.5",
        DN_Distance: "6.7",
        Route_Status: "",
    },

    "_102_3K": {
        RouteNo: "102/3K",
        From: "BDL",
        To: "ECIL X Roads",
        UP_Distance: "26",
        DN_Distance: "26.3",
        Route_Status: "",
    },

    "_102_9K": {
        RouteNo: "102/9K",
        From: "BDL",
        To: "Gandimaisamma",
        UP_Distance: "38.2",
        DN_Distance: "37.6",
        Route_Status: "",
    },

    "_102_185": {
        RouteNo: "102/185",
        From: "BDL",
        To: "Kukatpally",
        UP_Distance: "24.2",
        DN_Distance: "23.3",
        Route_Status: "",
    },

    "_102_218": {
        RouteNo: "102/218",
        From: "Midhani",
        To: "Patancheruvu",
        UP_Distance: "40.6",
        DN_Distance: "39.4",
        Route_Status: "",
    },

    "_102_253L": {
        RouteNo: "102/253L",
        From: "Koti Womens College",
        To: "Lemoor",
        UP_Distance: "34.3",
        DN_Distance: "33.9",
        Route_Status: "",
    },

    "_102B": {
        RouteNo: "102B",
        From: "Koti Womens College",
        To: "Badangpet",
        UP_Distance: "11.4",
        DN_Distance: "11.7",
        Route_Status: "",
    },

    "_102B_3K": {
        RouteNo: "102B/3K",
        From: "Badangpet",
        To: "ECIL X Roads",
        UP_Distance: "29.3",
        DN_Distance: "29.1",
        Route_Status: "",
    },

    "_102B_203N": {
        RouteNo: "102B/203N",
        From: SEC_RTF,
        To: "Nadergul",
        UP_Distance: "23.3",
        DN_Distance: "23.4",
        Route_Status: "",
    },

    "_102B_218": {
        RouteNo: "102B/218",
        From: "Badangpet",
        To: "Patancheruvu",
        UP_Distance: "45.4",
        DN_Distance: "44.2",
        Route_Status: "",
    },

    "_102M": {
        RouteNo: "102M",
        From: "Koti Womens College",
        To: "Balapur",
        UP_Distance: "12.4",
        DN_Distance: "12",
        Route_Status: "",
    },

    "_103": {
        RouteNo: "103",
        From: "Koti Womens College",
        To: "RCI",
        UP_Distance: "17.6",
        DN_Distance: "17.2",
        Route_Status: "",
    },

    "_104A": {
        RouteNo: "104A",
        From: "Koti Womens College",
        To: "Rajiv Gruhakalpa",
        UP_Distance: "13.5",
        DN_Distance: "14.4",
        Route_Status: "",
    },

    "_104R": {
        RouteNo: "104R",
        From: "Koti Womens College",
        To: "RN Reddy Nagar",
        UP_Distance: "11.5",
        DN_Distance: "11.2",
        Route_Status: "",
    },

    "_105": {
        RouteNo: "105",
        From: "Saidabad Colony",
        To: "Secretariate",
        UP_Distance: "10.8",
        DN_Distance: "10.1",
        Route_Status: "",
    },

    "_107JD": {
        RouteNo: "107JD",
        From: SEC_RTF,
        To: "Dilshuknagar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_107JL": {
        RouteNo: "107JL",
        From: SEC_RTF,
        To: LBNR,
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_107JS": {
        RouteNo: "107JS",
        From: SEC_RTF,
        To: "Saroornagar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_107VL": {
        RouteNo: "107VL",
        From: SEC_RTF,
        To: LBNR,
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_107VR": {
        RouteNo: "107VR",
        From: SEC_RTF,
        To: "Dilshuknagar",
        UP_Distance: "12.6",
        DN_Distance: "12.9",
        Route_Status: "",
    },

    "_107VS": {
        RouteNo: "107VS",
        From: SEC_RTF,
        To: "Saroornagar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113B": {
        RouteNo: "113B",
        From: "Uppal",
        To: "Barkatpura",
        UP_Distance: "9.5",
        DN_Distance: "8.5",
        Route_Status: "",
    },

    "_113F": {
        RouteNo: "113F",
        From: "Chengicherla",
        To: "Borabanda",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113IM": {
        RouteNo: "113IM",
        From: "Uppal",
        To: "Mehdipatnam",
        UP_Distance: "19.6",
        DN_Distance: "18.4",
        Route_Status: "",
    },

    "_113K": {
        RouteNo: "113K",
        From: "Uppal",
        To: "KPHB 4TH PHASE",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113KL": {
        RouteNo: "113KL",
        From: "Uppal",
        To: "Lingampally",
        UP_Distance: "36.4",
        DN_Distance: "34.6",
        Route_Status: "",
    },

    "_113KM": {
        RouteNo: "113KM",
        From: "Uppal",
        To: MYPX,
        UP_Distance: "31.3",
        DN_Distance: "29.5",
        Route_Status: "",
    },

    "_113M": {
        RouteNo: "113M",
        From: "Medipally",
        To: "Mehdipatnam",
        UP_Distance: "20.9",
        DN_Distance: "20.5",
        Route_Status: "",
    },

    "_113M_120": {
        RouteNo: "113M/120",
        From: "Boduppal",
        To: "Manchirevula",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113M_217": {
        RouteNo: "113M/217",
        From: "Uppal",
        To: "Patancheruvu",
        UP_Distance: "43.2",
        DN_Distance: "42.8",
        Route_Status: "",
    },

    "_113M_281": {
        RouteNo: "113M/281",
        From: "Kondapur",
        To: "Ghatkesar",
        UP_Distance: "52.8",
        DN_Distance: "54.2",
        Route_Status: "",
    },

    "_113M_288": {
        RouteNo: "113M/288",
        From: "Uppal",
        To: "Moinabad",
        UP_Distance: "40",
        DN_Distance: "38.9",
        Route_Status: "",
    },

    "_113MP": {
        RouteNo: "113MP",
        From: "Uppal",
        To: "Patel Nagar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113S": {
        RouteNo: "113S",
        From: "Secretariate",
        To: "KPHB 4TH PHASE",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113W": {
        RouteNo: "113W",
        From: "Uppal",
        To: "Waverock",
        UP_Distance: "33.1",
        DN_Distance: "33.8",
        Route_Status: "",
    },

    "_113YH": {
        RouteNo: "113YH",
        From: "Uppal",
        To: "Hitech City",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113YIW": {
        RouteNo: "113YIW",
        From: "Uppal",
        To: "Waverock",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113FT": {
        RouteNo: "113FT",
        From: "Chengicherla",
        To: "Borabanda",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113KLT": {
        RouteNo: "113KLT",
        From: "Uppal",
        To: "Lingampally",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113ILT": {
        RouteNo: "113ILT",
        From: "Uppal",
        To: "Lingampally",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113KT": {
        RouteNo: "113KT",
        From: "Uppal",
        To: "KPHB 4TH PHASE",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113FZ": {
        RouteNo: "113FZ",
        From: "Chengicherla",
        To: "Borabanda",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113MZ": {
        RouteNo: "113MZ",
        From: "Medipally",
        To: "Mehdipatnam",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_113IMZ": {
        RouteNo: "113IMZ",
        From: "Uppal",
        To: "Mehdipatnam",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_115": {
        RouteNo: "115",
        From: "Koti",
        To: "Boduppal",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_115_280": {
        RouteNo: "115/280",
        From: "Koti",
        To: "Ghatkesar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_116_220K": {
        RouteNo: "116/220K",
        From: CBS,
        To: "Kolluru",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_116G_65M": {
        RouteNo: "116G/65M",
        From: "Gowli Dhoddi",
        To: CBS,
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_116GA_65": {
        RouteNo: "116GA/65",
        From: "Gowli Dhoddi",
        To: "Afzalgunj",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_116N": {
        RouteNo: "116N",
        From: "Koti",
        To: "Gowli Dhoddi",
        UP_Distance: "19.7",
        DN_Distance: "22.9",
        Route_Status: "",
    },

    "_116N_220K": {
        RouteNo: "116N/220K",
        From: "Koti",
        To: "Kolluru",
        UP_Distance: "31.3",
        DN_Distance: "34",
        Route_Status: "",
    },

    "_116NL": {
        RouteNo: "116NL",
        From: "Koti",
        To: "Lingampally",
        UP_Distance: "28.5",
        DN_Distance: "31.6",
        Route_Status: "",
    },

    "_117": {
        RouteNo: "117",
        From: "Uppal",
        To: "Kushaiguda",
        UP_Distance: "14",
        DN_Distance: "13.1",
        Route_Status: "",
    },

    "_118W_300": {
        RouteNo: "118W/300",
        From: "Waverock",
        To: JBS,
        UP_Distance: "57.8",
        DN_Distance: "56.3",
        Route_Status: "",
    },

    "_119M": {
        RouteNo: "119M",
        From: "Mehdipatnam",
        To: "Golconda",
        UP_Distance: "8.2",
        DN_Distance: "8.2",
        Route_Status: "",
    },

    "_120": {
        RouteNo: "120",
        From: "Mehdipatnam",
        To: "Osmansagar",
        UP_Distance: "15.6",
        DN_Distance: "15.6",
        Route_Status: "",
    },

    "_120_113M": {
        RouteNo: "120/113M",
        From: "Manchirevula",
        To: "Boduppal",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_120K_5K": {
        RouteNo: "120K/5K",
        From: "Kokapet",
        To: SEC_ALF,
        UP_Distance: "25.5",
        DN_Distance: "24.6",
        Route_Status: "",
    },

    "_123": {
        RouteNo: "123",
        From: "Mehdipatnam",
        To: "Narsingi",
        UP_Distance: "12.2",
        DN_Distance: "11.7",
        Route_Status: "",
    },

    "_123_65M": {
        RouteNo: "123/65M",
        From: "Manchirevula",
        To: "Afzalgunj",
        UP_Distance: "19.8",
        DN_Distance: "19.4",
        Route_Status: "",
    },

    "_125_5K": {
        RouteNo: "125/5K",
        From: "Kondapur",
        To: SEC_ALF,
        UP_Distance: "25.2",
        DN_Distance: "25.6",
        Route_Status: "",
    },

    "_126_300": {
        RouteNo: "126/300",
        From: "JNTU College",
        To: LBNR,
        UP_Distance: "40.9",
        DN_Distance: "41.6",
        Route_Status: "",
    },

    "_126_300D": {
        RouteNo: "126/300D",
        From: "JNTU College",
        To: "Dilshuknagar",
        UP_Distance: "45.3",
        DN_Distance: "46.1",
        Route_Status: "",
    },

    "_126M": {
        RouteNo: "126M",
        From: "Mehdipatnam",
        To: "JNTU College",
        UP_Distance: "17.6",
        DN_Distance: "16.1",
        Route_Status: "",
    },

    "_127AL": {
        RouteNo: "127AL",
        From: "AOU University",
        To: LBNR,
        UP_Distance: "23.7",
        DN_Distance: "22.9",
        Route_Status: "",
    },

    "_127DA": {
        RouteNo: "127DA",
        From: "AOU University",
        To: "Dilshuknagar",
        UP_Distance: "19.2",
        DN_Distance: "18.5",
        Route_Status: "",
    },

    "_127K": {
        RouteNo: "127K",
        From: "Kondapur",
        To: "Koti",
        UP_Distance: "20.5",
        DN_Distance: "19.5",
        Route_Status: "",
    },

    "_127KL": {
        RouteNo: "127KL",
        From: "Kondapur",
        To: LBNR,
        UP_Distance: "29.8",
        DN_Distance: "28.8",
        Route_Status: "",
    },

    "_136H": {
        RouteNo: "136H",
        From: "Ambedkar Nagar",
        To: "Nampally",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_136T": {
        RouteNo: "136T",
        From: "Tarnaka",
        To: "Nampally",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_147": {
        RouteNo: "147",
        From: "ECIL X Roads",
        To: "Kondapur",
        UP_Distance: "29",
        DN_Distance: "29.6",
        Route_Status: "",
    },

    "_147W": {
        RouteNo: "147W",
        From: "ECIL X Roads",
        To: "Waverock",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_156_205F": {
        RouteNo: "156/205F",
        From: "Mehdipatnam",
        To: "Mettu",
        UP_Distance: "32.3",
        DN_Distance: "33",
        Route_Status: "",
    },

    "_156_299": {
        RouteNo: "156/299",
        From: "Mehdipatnam",
        To: "Hayathnagar",
        UP_Distance: "23.1",
        DN_Distance: "24.1",
        Route_Status: "",
    },

    "_156_316": {
        RouteNo: "156/316",
        From: "Dilshuknagar",
        To: "Gachibowli",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_156_505": {
        RouteNo: "156/505",
        From: "Hayathnagar",
        To: "Shankarpally",
        UP_Distance: "61.2",
        DN_Distance: "60.2",
        Route_Status: "",
    },

    "_156H": {
        RouteNo: "156H",
        From: "Mehdipatnam",
        To: "Hayathnagar",
        UP_Distance: "23.1",
        DN_Distance: "24.1",
        Route_Status: "",
    },

    "_156L": {
        RouteNo: "156L",
        From: LBNR,
        To: "Mehdipatnam",
        UP_Distance: "17.2",
        DN_Distance: "17.1",
        Route_Status: "",
    },

    "_156S": {
        RouteNo: "156S",
        From: "Mehdipatnam",
        To: "Sai Nagar",
        UP_Distance: "24.1",
        DN_Distance: "23.7",
        Route_Status: "",
    },

    "_156V": {
        RouteNo: "156V",
        From: "NGOs Colony",
        To: "Mehdipatnam",
        UP_Distance: "21.5",
        DN_Distance: "21.5",
        Route_Status: "",
    },

    "_156V_505": {
        RouteNo: "156V/505",
        From: "NGOs Colony",
        To: "Shankarpally",
        UP_Distance: "58.6",
        DN_Distance: "58.6",
        Route_Status: "",
    },

    "_158": {
        RouteNo: "158",
        From: "Dilshuknagar",
        To: "ESI Hospital",
        UP_Distance: "15.4",
        DN_Distance: "14",
        Route_Status: "",
    },

    "_158FL": {
        RouteNo: "158FL",
        From: "Dilshuknagar",
        To: "Borabanda",
        UP_Distance: "19.1",
        DN_Distance: "18.7",
        Route_Status: "",
    },

    "_158HF": {
        RouteNo: "158HF",
        From: "Hayathnagar",
        To: "Borabanda",
        UP_Distance: "30.7",
        DN_Distance: "29.4",
        Route_Status: "",
    },

    "_158VF": {
        RouteNo: "158VF",
        From: "NGOs Colony",
        To: "Borabanda",
        UP_Distance: "28",
        DN_Distance: "27.6",
        Route_Status: "",
    },

    "_171": {
        RouteNo: "171",
        From: SEC_GRD,
        To: "Gajularamaram",
        UP_Distance: "17.1",
        DN_Distance: "17.1",
        Route_Status: "",
    },

    "_171_10J": {
        RouteNo: "171/10J",
        From: "Shahpur Nagar",
        To: "KPHB 4TH PHASE",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_171K": {
        RouteNo: "171K",
        From: SEC_GRD,
        To: "KPHB Main Road",
        UP_Distance: "22.7",
        DN_Distance: "22.3",
        Route_Status: "",
    },

    "_171K_198W": {
        RouteNo: "171K/198W",
        From: "Gajularamaram",
        To: "Waverock",
        UP_Distance: "21.8",
        DN_Distance: "23.5",
        Route_Status: "",
    },

    "_171K_219": {
        RouteNo: "171K/219",
        From: "Shahpur Nagar",
        To: "Patancheruvu",
        UP_Distance: "25.1",
        DN_Distance: "24.7",
        Route_Status: "",
    },

    "_171R": {
        RouteNo: "171R",
        From: SEC_GRD,
        To: "Sri Ram Nagar",
        UP_Distance: "16.1",
        DN_Distance: "16.1",
        Route_Status: "",
    },

    "_171M_189M": {
        RouteNo: "171M/189M",
        From: "Gajularamaram",
        To: "Mehdipatnam",
        UP_Distance: "22.8",
        DN_Distance: "22.1",
        Route_Status: "",
    },

    "_178G_8A": {
        RouteNo: "178G/8A",
        From: "Gouse Nagar",
        To: SEC_ALF,
        UP_Distance: "23.5",
        DN_Distance: "21.6",
        Route_Status: "",
    },

    "_183B": {
        RouteNo: "183B",
        From: "Jeedimetla",
        To: "Balanagar",
        UP_Distance: "6.8",
        DN_Distance: "7",
        Route_Status: "",
    },

    "_183SS": {
        RouteNo: "183SS",
        From: "Suchitra",
        To: "Shahpur Nagar",
        UP_Distance: "3.8",
        DN_Distance: "3.8",
        Route_Status: "",
    },

    "_183S_219": {
        RouteNo: "183S/219",
        From: "Shahpur Nagar",
        To: "Patancheruvu",
        UP_Distance: "27.4",
        DN_Distance: "26.8",
        Route_Status: "",
    },

    "_185_102": {
        RouteNo: "185/102",
        From: "Kukatpally",
        To: "BDL",
        UP_Distance: "23.3",
        DN_Distance: "24.2",
        Route_Status: "",
    },

    "_185G": {
        RouteNo: "185G",
        From: CBS,
        To: "Jagathgirigutta",
        UP_Distance: "20.4",
        DN_Distance: "20.1",
        Route_Status: "",
    },

    "_187KL": {
        RouteNo: "187KL",
        From: "KPHB",
        To: LBNR,
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_187KH": {
        RouteNo: "187KH",
        From: "KPHB",
        To: "Hayathnagar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_188": {
        RouteNo: "188",
        From: "Mehdipatnam",
        To: "Kali Mandir",
        UP_Distance: "9.6",
        DN_Distance: "9.6",
        Route_Status: "",
    },

    "_188_5K": {
        RouteNo: "188/5K",
        From: "Kali Mandir",
        To: SEC_ALF,
        UP_Distance: "21.1",
        DN_Distance: "20",
        Route_Status: "",
    },

    "_188_251": {
        RouteNo: "188/251",
        From: "Mehdipatnam",
        To: "Shamshabad",
        UP_Distance: "28.7",
        DN_Distance: "28.2",
        Route_Status: "",
    },

    "_188B_49M": {
        RouteNo: "188B/49M",
        From: "Bairagiguda",
        To: SEC_ALF,
        UP_Distance: "22.7",
        DN_Distance: "21.7",
        Route_Status: "",
    },

    "_189M": {
        RouteNo: "189M",
        From: "Mehdipatnam",
        To: "Apuroopa Colony",
        UP_Distance: "22.7",
        DN_Distance: "23.3",
        Route_Status: "",
    },

    "_189M_171M": {
        RouteNo: "189M/171M",
        From: "Mehdipatnam",
        To: "Gajularamaram",
        UP_Distance: "22.1",
        DN_Distance: "22.8",
        Route_Status: "",
    },

    "_189M_272G": {
        RouteNo: "189M/272G",
        From: "Mehdipatnam",
        To: "Gandimaisamma",
        UP_Distance: "26.9",
        DN_Distance: "27.6",
        Route_Status: "",
    },

    "_195": {
        RouteNo: "195",
        From: "Bachupally",
        To: "Narsingi",
        UP_Distance: "195",
        DN_Distance: "195",
        Route_Status: "",
    },

    "_195_272": {
        RouteNo: "195/272",
        From: "Waverock",
        To: "Gandimaisamma",
        UP_Distance: "37",
        DN_Distance: "35.4",
        Route_Status: "",
    },

    "_195G": {
        RouteNo: "195G",
        From: "GAR",
        To: "JNTU College",
        UP_Distance: "16.2",
        DN_Distance: "19",
        Route_Status: "",
    },

    "_195GJ": {
        RouteNo: "195GJ",
        From: "GAR",
        To: "JNTU College",
        UP_Distance: "16.2",
        DN_Distance: "19",
        Route_Status: "",
    },

    "_195GK": {
        RouteNo: "195GK",
        From: "GAR",
        To: "JNTU College",
        UP_Distance: "16.2",
        DN_Distance: "19",
        Route_Status: "",
    },

    "_195H": {
        RouteNo: "195H",
        From: "HCU Depot",
        To: "Bachupally",
        UP_Distance: "22.1",
        DN_Distance: "21.8",
        Route_Status: "",
    },

    "_195J": {
        RouteNo: "195J",
        From: "Waverock",
        To: "Jagathgirigutta",
        UP_Distance: "22",
        DN_Distance: "21.1",
        Route_Status: "",
    },

    "_195P": {
        RouteNo: "195P",
        From: "Gar",
        To: "Pragathi Nagar",
        UP_Distance: "22.9",
        DN_Distance: "25",
        Route_Status: "",
    },

    "_195W": {
        RouteNo: "195W",
        From: "Waverock",
        To: "Bachupally",
        UP_Distance: "24.7",
        DN_Distance: "22.7",
        Route_Status: "",
    },

    "_195WJ": {
        RouteNo: "195WJ",
        From: "Waverock",
        To: "JNTU College",
        UP_Distance: "16.9",
        DN_Distance: "15.4",
        Route_Status: "",
    },

    "_195WP": {
        RouteNo: "195WP",
        From: "Waverock",
        To: "Gandimaisamma",
        UP_Distance: "29",
        DN_Distance: "26.7",
        Route_Status: "",
    },

    "_198W_171K": {
        RouteNo: "198W/171K",
        From: "Waverock",
        To: "Gajularamaram",
        UP_Distance: "23.5",
        DN_Distance: "21.8",
        Route_Status: "",
    },

    "_201": {
        RouteNo: "201",
        From: "Koti Womens College",
        To: "Bacharam",
        UP_Distance: "30.1",
        DN_Distance: "31.7",
        Route_Status: "",
    },

    "_201G": {
        RouteNo: "201G",
        From: "Koti Womens College",
        To: "Gowrelly",
        UP_Distance: "23.5",
        DN_Distance: "24.2",
        Route_Status: "",
    },

    "_201GD": {
        RouteNo: "201GD",
        From: "Dilshuknagar",
        To: "Gowrelly",
        UP_Distance: "18.9",
        DN_Distance: "19.5",
        Route_Status: "",
    },

    "_201K": {
        RouteNo: "201K",
        From: "Koti Womens College",
        To: "Kuntloor RG",
        UP_Distance: "21.5",
        DN_Distance: "22.3",
        Route_Status: "",
    },

    "_201M": {
        RouteNo: "201M",
        From: "Koti Womens College",
        To: "Marripally",
        UP_Distance: "16",
        DN_Distance: "16.7",
        Route_Status: "",
    },

    "_201Q": {
        RouteNo: "201Q",
        From: "Koti Womens College",
        To: "Quthbullapur",
        UP_Distance: "19.6",
        DN_Distance: "20.3",
        Route_Status: "",
    },

    "_201_290U": {
        RouteNo: "201/290U",
        From: "Bacharam",
        To: JBS,
        UP_Distance: "38.2",
        DN_Distance: "37.2",
        Route_Status: "",
    },

    "_201T_290U": {
        RouteNo: "201T/290U",
        From: "Taramatipet",
        To: JBS,
        UP_Distance: "32.4",
        DN_Distance: "31.3",
        Route_Status: "",
    },

    "_202B": {
        RouteNo: "202B",
        From: "Koti Womens College",
        To: "Brahmanapally",
        UP_Distance: "23.3",
        DN_Distance: "22.1",
        Route_Status: "",
    },

    "_202K_290U": {
        RouteNo: "202K/290U",
        From: "Koheda",
        To: JBS,
        UP_Distance: "32.8",
        DN_Distance: "32.5",
        Route_Status: "",
    },

    "_203A": {
        RouteNo: "203A",
        From: "Koti Womens College",
        To: "Adibatla",
        UP_Distance: "20.5",
        DN_Distance: "20.6",
        Route_Status: "",
    },

    "_203A_218": {
        RouteNo: "203A/218",
        From: "Adibatla",
        To: "Patancheruvu",
        UP_Distance: "54.4",
        DN_Distance: "53.4",
        Route_Status: "",
    },

    "_203AK": {
        RouteNo: "203AK",
        From: "Koti Womens College",
        To: "Kongarakalan",
        UP_Distance: "25.4",
        DN_Distance: "25.5",
        Route_Status: "",
    },

    "_203AR": {
        RouteNo: "203AR",
        From: SEC_RTF,
        To: "Raviryala",
        UP_Distance: "36.8",
        DN_Distance: "36.8",
        Route_Status: "",
    },

    "_203N": {
        RouteNo: "203N",
        From: "Koti Womens College",
        To: "Nadergul",
        UP_Distance: "16.8",
        DN_Distance: "16.9",
        Route_Status: "",
    },

    "_203N_3K": {
        RouteNo: "203N/3K",
        From: "Nadergul",
        To: "ECIL X Roads",
        UP_Distance: "34.5",
        DN_Distance: "34.5",
        Route_Status: "",
    },

    "_203N_3N": {
        RouteNo: "203N/3N",
        From: "Nadergul",
        To: "BEL",
        UP_Distance: "32.7",
        DN_Distance: "30.9",
        Route_Status: "",
    },

    "_203N_102B": {
        RouteNo: "203N/102B",
        From: "Nadergul",
        To: SEC_RTF,
        UP_Distance: "23.4",
        DN_Distance: "23.3",
        Route_Status: "",
    },

    "_203N_218": {
        RouteNo: "203N/218",
        From: "Nadergul",
        To: "Patancheruvu",
        UP_Distance: "50.7",
        DN_Distance: "48.7",
        Route_Status: "",
    },

    "_203U": {
        RouteNo: "203U",
        From: "Uppal X Roads",
        To: "Adibatla",
        UP_Distance: "26.1",
        DN_Distance: "26.6",
        Route_Status: "",
    },

    "_203U_90U": {
        RouteNo: "203U/90U",
        From: "Adibatla",
        To: "Uppal X Roads",
        UP_Distance: "26.6",
        DN_Distance: "26.1",
        Route_Status: "",
    },

    "_204_290U": {
        RouteNo: "204/290U",
        From: "Gandicheruvu",
        To: JBS,
        UP_Distance: "32.3",
        DN_Distance: "31.8",
        Route_Status: "",
    },

    "_204DA": {
        RouteNo: "204DA",
        From: "Dilshuknagar",
        To: "Anajpur",
        UP_Distance: "28",
        DN_Distance: "27.8",
        Route_Status: "",
    },

    "_204U": {
        RouteNo: "204U",
        From: "Koti Womens College",
        To: "Sanghi Nagar",
        UP_Distance: "30.5",
        DN_Distance: "30.6",
        Route_Status: "",
    },

    "_204UA": {
        RouteNo: "204UA",
        From: "Koti Womens College",
        To: "Anajpur",
        UP_Distance: "32.5",
        DN_Distance: "32.5",
        Route_Status: "",
    },

    "_205": {
        RouteNo: "205",
        From: "Koti Womens College",
        To: "Pillaipally",
        UP_Distance: "37.8",
        DN_Distance: "38.9",
        Route_Status: "",
    },

    "_205A": {
        RouteNo: "205A",
        From: "Koti Womens College",
        To: "Anajpur",
        UP_Distance: "30.4",
        DN_Distance: "29.5",
        Route_Status: "",
    },

    "_205A_290U": {
        RouteNo: "205A/290U",
        From: "Anajpur",
        To: JBS,
        UP_Distance: "36.9",
        DN_Distance: "37.5",
        Route_Status: "",
    },

    "_205B_290U": {
        RouteNo: "205B/290U",
        From: "Balijaguda",
        To: SEC_CS,
        UP_Distance: "35.6",
        DN_Distance: "34.4",
        Route_Status: "",
    },

    "_205F_156": {
        RouteNo: "205F/156",
        From: "Mettu",
        To: "Mehdipatnam",
        UP_Distance: "33",
        DN_Distance: "32.3",
        Route_Status: "",
    },

    "_205M_290U": {
        RouteNo: "205M/290U",
        From: "Majeedpur",
        To: JBS,
        UP_Distance: "37.3",
        DN_Distance: "37.8",
        Route_Status: "",
    },

    "_211": {
        RouteNo: "211",
        From: SEC_GRD,
        To: "Pothaipally",
        UP_Distance: "19.4",
        DN_Distance: "19.7",
        Route_Status: "",
    },

    "_211_242": {
        RouteNo: "211/242",
        From: SEC_BS,
        To: "DongalaMysamma",
        UP_Distance: "41.9",
        DN_Distance: "40.8",
        Route_Status: "",
    },

    "_211A": {
        RouteNo: "211A",
        From: SEC_GRD,
        To: "Aliabad",
        UP_Distance: "28.6",
        DN_Distance: "28.8",
        Route_Status: "",
    },

    "_211B": {
        RouteNo: "211B",
        From: SEC_GRD,
        To: "Uddhamarri",
        UP_Distance: "38.4",
        DN_Distance: "38.1",
        Route_Status: "",
    },

    "_211CD": {
        RouteNo: "211CD",
        From: SEC_GRD,
        To: "DRDO Yadgarpally",
        UP_Distance: "29.2",
        DN_Distance: "29.4",
        Route_Status: "",
    },

    "_211D": {
        RouteNo: "211D",
        From: SEC_GRD,
        To: "Kolthur",
        UP_Distance: "36.4",
        DN_Distance: "36.6",
        Route_Status: "",
    },

    "_211DY": {
        RouteNo: "211DY",
        From: SEC_GRD,
        To: "Devarayamjal",
        UP_Distance: "21.8",
        DN_Distance: "22.1",
        Route_Status: "",
    },

    "_211K": {
        RouteNo: "211K",
        From: SEC_GRD,
        To: "Keshavaram",
        UP_Distance: "35.6",
        DN_Distance: "35.6",
        Route_Status: "",
    },

    "_211M": {
        RouteNo: "211M",
        From: SEC_GRD,
        To: "CRPF",
        UP_Distance: "21.5",
        DN_Distance: "21.5",
        Route_Status: "",
    },

    "_211RG": {
        RouteNo: "211RG",
        From: SEC_GRD,
        To: "RG Colony",
        UP_Distance: "23.3",
        DN_Distance: "22.8",
        Route_Status: "",
    },

    "_211RG_24B": {
        RouteNo: "211RG/24B",
        From: "RG Colony",
        To: SEC_GRD,
        UP_Distance: "22.8",
        DN_Distance: "23.3",
        Route_Status: "",
    },

    "_212": {
        RouteNo: "212",
        From: SEC_GRD,
        To: "BITS Pilani",
        UP_Distance: "22.8",
        DN_Distance: "22.9",
        Route_Status: "",
    },

    "_212_702": {
        RouteNo: "212/702",
        From: SEC_GRD,
        To: "Vargal Temple",
        UP_Distance: "49.7",
        DN_Distance: "49.6",
        Route_Status: "",
    },

    "_212T": {
        RouteNo: "212T",
        From: SEC_GRD,
        To: "Turkapally",
        UP_Distance: "39",
        DN_Distance: "38.8",
        Route_Status: "",
    },

    "_215": {
        RouteNo: "215",
        From: "Aramghar",
        To: "Kondapur",
        UP_Distance: "22.3",
        DN_Distance: "23",
        Route_Status: "",
    },

    "_216": {
        RouteNo: "216",
        From: "Koti",
        To: "Lingampally",
        UP_Distance: "26.6",
        DN_Distance: "26.9",
        Route_Status: "",
    },

    "_216KL": {
        RouteNo: "216KL",
        From: "Koti",
        To: "Lingampally",
        UP_Distance: "27.7",
        DN_Distance: "28",
        Route_Status: "",
    },

    "_216M": {
        RouteNo: "216M",
        From: "Mehdipatnam",
        To: "Lingampally",
        UP_Distance: "19.1",
        DN_Distance: "19.3",
        Route_Status: "",
    },

    "_216MP": {
        RouteNo: "216MP",
        From: "Mehdipatnam",
        To: "Patel Guda",
        UP_Distance: "29.6",
        DN_Distance: "28.1",
        Route_Status: "",
    },

    "_217": {
        RouteNo: "217",
        From: "Koti",
        To: "Patancheruvu",
        UP_Distance: "33.6",
        DN_Distance: "34.2",
        Route_Status: "",
    },

    "_217_113M": {
        RouteNo: "217/113M",
        From: "Patancheruvu",
        To: "Uppal",
        UP_Distance: "42.8",
        DN_Distance: "43.2",
        Route_Status: "",
    },

    "_217_254": {
        RouteNo: "217/254",
        From: "Lingampally",
        To: "Kongarakalan",
        UP_Distance: "58.3",
        DN_Distance: "57.5",
        Route_Status: "",
    },

    "_217_300": {
        RouteNo: "217/300",
        From: "Patancheruvu",
        To: LBNR,
        UP_Distance: "50.6",
        DN_Distance: "49.7",
        Route_Status: "",
    },

    "_217C": {
        RouteNo: "217C",
        From: CBS,
        To: "Patancheruvu",
        UP_Distance: "34.9",
        DN_Distance: "35.4",
        Route_Status: "",
    },

    "_217D": {
        RouteNo: "217D",
        From: "Dilshuknagar",
        To: "Patancheruvu",
        UP_Distance: "38.8",
        DN_Distance: "40",
        Route_Status: "",
    },

    "_218": {
        RouteNo: "218",
        From: "Koti",
        To: "Patancheruvu",
        UP_Distance: "33.1",
        DN_Distance: "32.7",
        Route_Status: "",
    },

    "_218_102": {
        RouteNo: "218/102",
        From: "Patancheruvu",
        To: "Midhani",
        UP_Distance: "39.4",
        DN_Distance: "40.6",
        Route_Status: "",
    },

    "_218_102B": {
        RouteNo: "218/102B",
        From: "Patancheruvu",
        To: "Badangpet",
        UP_Distance: "44.2",
        DN_Distance: "45.4",
        Route_Status: "",
    },

    "_218_203A": {
        RouteNo: "218/203A",
        From: "Patancheruvu",
        To: "Adibatla",
        UP_Distance: "53.4",
        DN_Distance: "54.4",
        Route_Status: "",
    },

    "_218_203N": {
        RouteNo: "218/203N",
        From: "Patancheruvu",
        To: "Nadergul",
        UP_Distance: "48.7",
        DN_Distance: "50.7",
        Route_Status: "",
    },

    "_218_220K": {
        RouteNo: "218/220K",
        From: "Koti",
        To: "Kolluru",
        UP_Distance: "38.6",
        DN_Distance: "38.3",
        Route_Status: "",
    },

    "_218_224MN": {
        RouteNo: "218/224MN",
        From: "Koti",
        To: "Mallampet",
        UP_Distance: "27.2",
        DN_Distance: "25.9",
        Route_Status: "",
    },

    "_218_277K": {
        RouteNo: "218/277K",
        From: MYPX,
        To: "Kongarakalan",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_218A": {
        RouteNo: "218A",
        From: "Afzalgunj",
        To: "Patancheruvu",
        UP_Distance: "33",
        DN_Distance: "33",
        Route_Status: "",
    },

    "_218C": {
        RouteNo: "218C",
        From: CBS,
        To: "Patancheruvu",
        UP_Distance: "34.4",
        DN_Distance: "33.8",
        Route_Status: "",
    },

    "_218CA": {
        RouteNo: "218CA",
        From: "Chandrayangutta",
        To: "Patancheruvu",
        UP_Distance: "40.2",
        DN_Distance: "40.6",
        Route_Status: "",
    },

    "_218D": {
        RouteNo: "218D",
        From: "Dilshuknagar",
        To: "Patancheruvu",
        UP_Distance: "38.4",
        DN_Distance: "37.4",
        Route_Status: "",
    },

    "_218H": {
        RouteNo: "218H",
        From: "Hayathnagar",
        To: "Patancheruvu",
        UP_Distance: "50",
        DN_Distance: "48",
        Route_Status: "",
    },

    "_218L": {
        RouteNo: "218L",
        From: "Koti",
        To: "Lingampally",
        UP_Distance: "26",
        DN_Distance: "25.5",
        Route_Status: "",
    },

    "_219": {
        RouteNo: "219",
        From: SEC_ALF,
        To: "Isnapur",
        UP_Distance: "36.6",
        DN_Distance: "37.4",
        Route_Status: "",
    },

    "_219_16A": {
        RouteNo: "219/16A",
        From: "Patancheruvu",
        To: "ECIL X Roads",
        UP_Distance: "45.3",
        DN_Distance: "45.4",
        Route_Status: "",
    },

    "_219_16C": {
        RouteNo: "219/16C",
        From: "Patancheruvu",
        To: "ECIL X Roads",
        UP_Distance: "45.3",
        DN_Distance: "44.6",
        Route_Status: "",
    },

    "_219_17": {
        RouteNo: "219/17",
        From: "Patancheruvu",
        To: "ECIL X Roads",
        UP_Distance: "43.8",
        DN_Distance: "44.4",
        Route_Status: "",
    },

    "_219_17H": {
        RouteNo: "219/17H",
        From: "Patancheruvu",
        To: "ECIL X Roads",
        UP_Distance: "43.8",
        DN_Distance: "44.4",
        Route_Status: "",
    },

    "_219_18C": {
        RouteNo: "219/18C",
        From: "Patancheruvu",
        To: "Chengicherla",
        UP_Distance: "47.4",
        DN_Distance: "48.2",
        Route_Status: "",
    },

    "_219_23S": {
        RouteNo: "219/23S",
        From: "Patancheruvu",
        To: "ECIL X Roads",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_219_24N": {
        RouteNo: "219/24N",
        From: "Patancheruvu",
        To: "ECIL X Roads",
        UP_Distance: "37.5",
        DN_Distance: "37.6",
        Route_Status: "",
    },

    "_219_171K": {
        RouteNo: "219/171K",
        From: "Patancheruvu",
        To: "Shahpur Nagar",
        UP_Distance: "24.7",
        DN_Distance: "25.1",
        Route_Status: "",
    },

    "_219_183S": {
        RouteNo: "219/183S",
        From: "Patancheruvu",
        To: "Shahpur Nagar",
        UP_Distance: "26.8",
        DN_Distance: "27.4",
        Route_Status: "",
    },

    "_219_224G": {
        RouteNo: "219/224G",
        From: "Patancheruvu",
        To: "Gandimaisamma",
        UP_Distance: "26.3",
        DN_Distance: "26.4",
        Route_Status: "",
    },

    "_219_229": {
        RouteNo: "219/229",
        From: "Patancheruvu",
        To: "Medchal",
        UP_Distance: "45.3",
        DN_Distance: "44.9",
        Route_Status: "",
    },

    "_219_250": {
        RouteNo: "219/250",
        From: "Patancheruvu",
        To: "ECIL X Roads",
        UP_Distance: "45.8",
        DN_Distance: "45.2",
        Route_Status: "",
    },

    "_219_250C": {
        RouteNo: "219/250C",
        From: "Isnapur",
        To: "Cherlapally Station",
        UP_Distance: "55.4",
        DN_Distance: "54.1",
        Route_Status: "",
    },

    "_219_272G": {
        RouteNo: "219/272G",
        From: "Patancheruvu",
        To: "Gandimaisamma",
        UP_Distance: "34.8",
        DN_Distance: "35.5",
        Route_Status: "",
    },

    "_219_280": {
        RouteNo: "219/280",
        From: "Patancheruvu",
        To: "Ghatkesar",
        UP_Distance: "54.4",
        DN_Distance: "54.6",
        Route_Status: "",
    },

    "_219I": {
        RouteNo: "219I",
        From: SEC_ALF,
        To: "Isnapur",
        UP_Distance: "36.6",
        DN_Distance: "37.4",
        Route_Status: "",
    },

    "_219I_224G": {
        RouteNo: "219I/224G",
        From: "Isnapur",
        To: "Gandimaisamma",
        UP_Distance: "32.1",
        DN_Distance: "32.2",
        Route_Status: "",
    },

    "_219I_272G": {
        RouteNo: "219I/272G",
        From: "Isnapur",
        To: "Gandimaisamma",
        UP_Distance: "40.6",
        DN_Distance: "41.3",
        Route_Status: "",
    },

    "_219P": {
        RouteNo: "219P",
        From: SEC_ALF,
        To: "Patel Guda",
        UP_Distance: "31.3",
        DN_Distance: "31.3",
        Route_Status: "",
    },

    "_220E_94C": {
        RouteNo: "220E/94C",
        From: "Edulanagulapally",
        To: CDRYGT,
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_220G": {
        RouteNo: "220G",
        From: "Mehdipatnam",
        To: "Gopulaaram",
        UP_Distance: "28.4",
        DN_Distance: "28.5",
        Route_Status: "",
    },

    "_220J": {
        RouteNo: "220J",
        From: "Mehdipatnam",
        To: "Janawada",
        UP_Distance: "23.2",
        DN_Distance: "23.4",
        Route_Status: "",
    },

    "_220K": {
        RouteNo: "220K",
        From: "Mehdipatnam",
        To: "Kolluru",
        UP_Distance: "26.4",
        DN_Distance: "26.9",
        Route_Status: "",
    },

    "_220K_10H": {
        RouteNo: "220K/10H",
        From: "Kollur 2BHK",
        To: SEC_ALF,
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_220K_116": {
        RouteNo: "220K/116",
        From: "Kollur",
        To: CBS,
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_220K_116N": {
        RouteNo: "220K/116N",
        From: "Kollur",
        To: "Koti",
        UP_Distance: "34",
        DN_Distance: "31.3",
        Route_Status: "",
    },

    "_220K_218": {
        RouteNo: "220K/218",
        From: "Kollur",
        To: "Koti",
        UP_Distance: "38.3",
        DN_Distance: "38.6",
        Route_Status: "",
    },

    "_221": {
        RouteNo: "221",
        From: "Miyapur Metro Stn.",
        To: "Manchirevula",
        UP_Distance: "18.1",
        DN_Distance: "16.6",
        Route_Status: "",
    },

    "_221G": {
        RouteNo: "221G",
        From: "Gandimaisamma",
        To: "Gachibowli",
        UP_Distance: "22.2",
        DN_Distance: "22.5",
        Route_Status: "",
    },

    "_222A": {
        RouteNo: "222A",
        From: "Koti",
        To: "Patancheruvu",
        UP_Distance: "34.4",
        DN_Distance: "34.9",
        Route_Status: "",
    },

    "_222L": {
        RouteNo: "222L",
        From: "Koti",
        To: "Lingampally",
        UP_Distance: "27.3",
        DN_Distance: "28",
        Route_Status: "",
    },

    "_222P": {
        RouteNo: "222P",
        From: CBS,
        To: "Lingampally Municipal",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_224_47D": {
        RouteNo: "224/47D",
        From: "Mayuri Nagar",
        To: "Dargah",
        UP_Distance: "24.9",
        DN_Distance: "26.4",
        Route_Status: "",
    },

    "_224B": {
        RouteNo: "224B",
        From: MYPX,
        To: "IDA Bollarum",
        UP_Distance: "8.2",
        DN_Distance: "10.4",
        Route_Status: "",
    },

    "_224G": {
        RouteNo: "224G",
        From: MYPX,
        To: "Gandimaisamma",
        UP_Distance: "14.4",
        DN_Distance: "14.8",
        Route_Status: "",
    },

    "_224G_10KM": {
        RouteNo: "224G/10KM",
        From: "Gandimaisamma",
        To: SEC_ALF,
        UP_Distance: "35",
        DN_Distance: "35",
        Route_Status: "",
    },

    "_224G_219": {
        RouteNo: "224G/219",
        From: "Gandimaisamma",
        To: "Patancheruvu",
        UP_Distance: "26.4",
        DN_Distance: "26.3",
        Route_Status: "",
    },

    "_224G_219I": {
        RouteNo: "224G/219I",
        From: "Gandimaisamma",
        To: "Isnapur",
        UP_Distance: "32.2",
        DN_Distance: "32.1",
        Route_Status: "",
    },

    "_224MN": {
        RouteNo: "224MN",
        From: "Nizampet X Roads",
        To: "Mallampet",
        UP_Distance: "8.1",
        DN_Distance: "8.3",
        Route_Status: "",
    },

    "_224MN_218": {
        RouteNo: "224MN/218",
        From: "Mallampet",
        To: "Koti",
        UP_Distance: "25.9",
        DN_Distance: "27.2",
        Route_Status: "",
    },

    "_224X": {
        RouteNo: "224X",
        From: MYPX,
        To: "IDA Bollarum",
        UP_Distance: "8.2",
        DN_Distance: "10.4",
        Route_Status: "",
    },

    "_226": {
        RouteNo: "226",
        From: SEC_ALF,
        To: "Patancheruvu",
        UP_Distance: "32.3",
        DN_Distance: "34.2",
        Route_Status: "",
    },

    "_227": {
        RouteNo: "227",
        From: SEC_GRD,
        To: "Gandimaisamma",
        UP_Distance: "25.7",
        DN_Distance: "27",
        Route_Status: "",
    },

    "_227_25S": {
        RouteNo: "227/25S",
        From: "Gandimaisamma",
        To: SEC_GRD,
        UP_Distance: "31.1",
        DN_Distance: "29.2",
        Route_Status: "",
    },

    "_229": {
        RouteNo: "229",
        From: SEC_GRD,
        To: "Medchal",
        UP_Distance: "26.4",
        DN_Distance: "25.9",
        Route_Status: "",
    },

    "_229_1D": {
        RouteNo: "229/1D",
        From: "Medchal",
        To: "Dilshuknagar",
        UP_Distance: "37.6",
        DN_Distance: "38.3",
        Route_Status: "",
    },

    "_229_1Z": {
        RouteNo: "229/1Z",
        From: "Medchal",
        To: "Aramghar",
        UP_Distance: "43.8",
        DN_Distance: "45.1",
        Route_Status: "",
    },

    "_229_5K": {
        RouteNo: "229/5K",
        From: "Medchal",
        To: "Mehdipatnam",
        UP_Distance: "33.8",
        DN_Distance: "34.3",
        Route_Status: "",
    },

    "_229_8C": {
        RouteNo: "229/8C",
        From: "Medchal",
        To: "Afzalgunj",
        UP_Distance: "32.7",
        DN_Distance: "32.6",
        Route_Status: "",
    },

    "_229_18C": {
        RouteNo: "229/18C",
        From: "Medchal",
        To: "Chengicherla",
        UP_Distance: "41.9",
        DN_Distance: "43.9",
        Route_Status: "",
    },

    "_229_22E": {
        RouteNo: "229/22E",
        From: "Medchal",
        To: "ECIL X Roads",
        UP_Distance: "26.1",
        DN_Distance: "27.9",
        Route_Status: "",
    },

    "_229_25S": {
        RouteNo: "229/25S",
        From: "Medchal",
        To: SEC_GRD,
        UP_Distance: "28.6",
        DN_Distance: "30.9",
        Route_Status: "",
    },

    "_229_49M": {
        RouteNo: "229/49M",
        From: "Medchal",
        To: "Mehdipatnam",
        UP_Distance: "33.5",
        DN_Distance: "34",
        Route_Status: "",
    },

    "_229_90L": {
        RouteNo: "229/90L",
        From: "Medchal",
        To: LBNR,
        UP_Distance: "40.5",
        DN_Distance: "40.8",
        Route_Status: "",
    },

    "_229_219": {
        RouteNo: "229/219",
        From: "Medchal",
        To: "Patancheruvu",
        UP_Distance: "44.9",
        DN_Distance: "45.3",
        Route_Status: "",
    },

    "_229_279": {
        RouteNo: "229/279",
        From: "Medchal",
        To: "Ibrahimpatnam",
        UP_Distance: "63.7",
        DN_Distance: "64.9",
        Route_Status: "",
    },

    "_229_290": {
        RouteNo: "229/290",
        From: "Medchal",
        To: "Hayathnagar",
        UP_Distance: "49",
        DN_Distance: "49.4",
        Route_Status: "",
    },

    "_229_290U": {
        RouteNo: "229/290U",
        From: "Medchal",
        To: "Hayathnagar",
        UP_Distance: "46.7",
        DN_Distance: "48.3",
        Route_Status: "",
    },

    "_229B": {
        RouteNo: "229B",
        From: "Medchal",
        To: "Bowenpally",
        UP_Distance: "19.7",
        DN_Distance: "20.2",
        Route_Status: "",
    },

    "_229S_90L": {
        RouteNo: "229S/90L",
        From: "Medchal",
        To: LBNR,
        UP_Distance: "40.5",
        DN_Distance: "40.8",
        Route_Status: "",
    },

    "_230A": {
        RouteNo: "230A",
        From: SEC_GRD,
        To: "Annaram",
        UP_Distance: "34.7",
        DN_Distance: "33.1",
        Route_Status: "",
    },

    "_230AB": {
        RouteNo: "230AB",
        From: SEC_GRD,
        To: "Bonthapally Kaman",
        UP_Distance: "38",
        DN_Distance: "36.4",
        Route_Status: "",
    },

    "_230AN": {
        RouteNo: "230AN",
        From: SEC_GRD,
        To: "Annaram",
        UP_Distance: "34.7",
        DN_Distance: "33.1",
        Route_Status: "",
    },

    "_230D": {
        RouteNo: "230D",
        From: SEC_GRD,
        To: "Dundigal",
        UP_Distance: "26",
        DN_Distance: "25.7",
        Route_Status: "",
    },

    "_230P": {
        RouteNo: "230P",
        From: SEC_GRD,
        To: "Dundigal",
        UP_Distance: "26",
        DN_Distance: "25.7",
        Route_Status: "",
    },

    "_230P_9K": {
        RouteNo: "230P/9K",
        From: "Dundigal",
        To: "Afzalgunj",
        UP_Distance: "34.7",
        DN_Distance: "34.9",
        Route_Status: "",
    },

    "_230P_9X": {
        RouteNo: "230P/9X",
        From: "Dundigal",
        To: CBS,
        UP_Distance: "34",
        DN_Distance: "34.6",
        Route_Status: "",
    },

    "_230P_9XM": {
        RouteNo: "230P/9XM",
        From: "Dundigal",
        To: "Charminar",
        UP_Distance: "36.2",
        DN_Distance: "36.1",
        Route_Status: "",
    },

    "_231": {
        RouteNo: "231",
        From: "Medchal",
        To: "Medicity",
        UP_Distance: "9.6",
        DN_Distance: "9.7",
        Route_Status: "",
    },

    "_231KN": {
        RouteNo: "231KN",
        From: SEC_ALF,
        To: "Kazipally",
        UP_Distance: "27.4",
        DN_Distance: "26.4",
        Route_Status: "",
    },

    "_233": {
        RouteNo: "233",
        From: SEC_GRD,
        To: "Nuthanakal",
        UP_Distance: "33.3",
        DN_Distance: "33.4",
        Route_Status: "",
    },

    "_241_300": {
        RouteNo: "241/300",
        From: "DRDO Yadgarpally",
        To: "Aramghar",
        UP_Distance: "46.7",
        DN_Distance: "47.3",
        Route_Status: "",
    },

    "_241T": {
        RouteNo: "241T",
        From: SEC_BS,
        To: "Dharmavaram",
        UP_Distance: "31.6",
        DN_Distance: "33.5",
        Route_Status: "",
    },

    "_241C": {
        RouteNo: "241C",
        From: SEC_BS,
        To: "Cheriyal Temple",
        UP_Distance: "22.9",
        DN_Distance: "23.7",
        Route_Status: "",
    },

    "_242": {
        RouteNo: "242",
        From: SEC_BS,
        To: "Keesaragutta",
        UP_Distance: "30.4",
        DN_Distance: "31.9",
        Route_Status: "",
    },

    "_242_3K": {
        RouteNo: "242/3K",
        From: "Keesaragutta",
        To: "Afzalgunj",
        UP_Distance: "38.1",
        DN_Distance: "38.4",
        Route_Status: "",
    },

    "_242_17H": {
        RouteNo: "242/17H",
        From: "Keesaragutta",
        To: SEC_BS,
        UP_Distance: "31.9",
        DN_Distance: "30.4",
        Route_Status: "",
    },

    "_242_211": {
        RouteNo: "242/211",
        From: SEC_BS,
        To: "DongalaMysamma",
        UP_Distance: "40.8",
        DN_Distance: "41.9",
        Route_Status: "",
    },

    "_242_272G": {
        RouteNo: "242/272G",
        From: "Keesaragutta",
        To: "Gandimaisamma",
        UP_Distance: "54",
        DN_Distance: "52.6",
        Route_Status: "",
    },

    "_242A": {
        RouteNo: "242A",
        From: SEC_BS,
        To: "Ankireddy Pally",
        UP_Distance: "30.6",
        DN_Distance: "32.1",
        Route_Status: "",
    },

    "_242B": {
        RouteNo: "242B",
        From: SEC_BS,
        To: "Bogaram",
        UP_Distance: "28.2",
        DN_Distance: "29.7",
        Route_Status: "",
    },

    "_242BJ": {
        RouteNo: "242BJ",
        From: SEC_BS,
        To: "JNNURM Colony",
        UP_Distance: "30.2",
        DN_Distance: "31.7",
        Route_Status: "",
    },

    "_242DM": {
        RouteNo: "242DM",
        From: SEC_BS,
        To: "Dongala Mysamma",
        UP_Distance: "40.8",
        DN_Distance: "41.9",
        Route_Status: "",
    },

    "_242G": {
        RouteNo: "242G",
        From: SEC_BS,
        To: "Keesaragutta",
        UP_Distance: "37.3",
        DN_Distance: "38.7",
        Route_Status: "",
    },

    "_242GA": {
        RouteNo: "242GA",
        From: SEC_BS,
        To: "Ankireddy Pally",
        UP_Distance: "36",
        DN_Distance: "36.3",
        Route_Status: "",
    },

    "_242RG": {
        RouteNo: "242RG",
        From: SEC_BS,
        To: "RG Colony",
        UP_Distance: "23.2",
        DN_Distance: "24.7",
        Route_Status: "",
    },

    "_242RG_15H": {
        RouteNo: "242RG/15H",
        From: "RG Colony",
        To: SEC_BS,
        UP_Distance: "23.6",
        DN_Distance: "22.7",
        Route_Status: "",
    },

    "_245A": {
        RouteNo: "245A",
        From: SEC_RTF,
        To: "Aushapur",
        UP_Distance: "29.2",
        DN_Distance: "32",
        Route_Status: "",
    },

    "_250": {
        RouteNo: "250",
        From: SEC_BS,
        To: "ECIL X Roads",
        UP_Distance: "14",
        DN_Distance: "14.4",
        Route_Status: "",
    },

    "_250_10K": {
        RouteNo: "250/10K",
        From: "ECIL X Roads",
        To: "KPHB 4TH Phase",
        UP_Distance: "34.1",
        DN_Distance: "34.1",
        Route_Status: "",
    },

    "_250_49": {
        RouteNo: "250/49",
        From: "ECIL X Roads",
        To: "Nampally",
        UP_Distance: "26.8",
        DN_Distance: "26.9",
        Route_Status: "",
    },

    "_250_49M": {
        RouteNo: "250/49M",
        From: "ECIL X Roads",
        To: "Mehdipatnam",
        UP_Distance: "26.9",
        DN_Distance: "26.9",
        Route_Status: "",
    },

    "_250_49MT": {
        RouteNo: "250/49MT",
        From: "ECIL X Roads",
        To: "Tallagadda",
        UP_Distance: "28.9",
        DN_Distance: "29.9",
        Route_Status: "",
    },

    "_250_219": {
        RouteNo: "250/219",
        From: "ECIL X Roads",
        To: "Patancheruvu",
        UP_Distance: "45.2",
        DN_Distance: "45.8",
        Route_Status: "",
    },

    "_250_281": {
        RouteNo: "250/281",
        From: SEC_BS,
        To: "Ghatkesar",
        UP_Distance: "30.4",
        DN_Distance: "30.6",
        Route_Status: "",
    },

    "_250C": {
        RouteNo: "250C",
        From: SEC_BS,
        To: "Cherlapally",
        UP_Distance: "15.6",
        DN_Distance: "15.9",
        Route_Status: "",
    },

    "_250C_20": {
        RouteNo: "250C/20",
        From: "Cherlapally",
        To: "Secretariate",
        UP_Distance: "21.1",
        DN_Distance: "21.2",
        Route_Status: "",
    },

    "_250C_29B": {
        RouteNo: "250C/29B",
        From: "Cherlapally Station",
        To: "Gandimaisamma",
        UP_Distance: "39.6",
        DN_Distance: "40.1",
        Route_Status: "",
    },

    "_250C_30": {
        RouteNo: "250C/30",
        From: "Cherlapally Station",
        To: "Jagathgirigutta",
        UP_Distance: "33",
        DN_Distance: "33.3",
        Route_Status: "",
    },

    "_250C_49M": {
        RouteNo: "250C/49M",
        From: "Cherlapally",
        To: "Mehdipatnam",
        UP_Distance: "28.4",
        DN_Distance: "28.4",
        Route_Status: "",
    },

    "_250C_219": {
        RouteNo: "250C/219",
        From: "Cherlapally Station",
        To: "Isnapur",
        UP_Distance: "54.1",
        DN_Distance: "55.4",
        Route_Status: "",
    },

    "_250D": {
        RouteNo: "250D",
        From: SEC_BS,
        To: "Ambedkar Nagar",
        UP_Distance: "21.5",
        DN_Distance: "22.1",
        Route_Status: "",
    },

    "_250D_49M": {
        RouteNo: "250D/49M",
        From: "Ambedkar Nagar",
        To: "Mehdipatnam",
        UP_Distance: "34.6",
        DN_Distance: "34.4",
        Route_Status: "",
    },

    "_250E": {
        RouteNo: "250E",
        From: "ECIL X Roads",
        To: "Chengicherla Depot",
        UP_Distance: "11.6",
        DN_Distance: "11.6",
        Route_Status: "",
    },

    "_250S": {
        RouteNo: "250S",
        From: SEC_BS,
        To: "Chengicherla Depot",
        UP_Distance: "16.1",
        DN_Distance: "16.5",
        Route_Status: "",
    },

    "_250SS": {
        RouteNo: "250SS",
        From: SEC_BS,
        To: "Chengicherla Depot",
        UP_Distance: "15.7",
        DN_Distance: "15.5",
        Route_Status: "",
    },

    "_251_1Z": {
        RouteNo: "251/1Z",
        From: "Shamshabad",
        To: SEC_RTF,
        UP_Distance: "26.6",
        DN_Distance: "26.2",
        Route_Status: "",
    },

    "_251_2Z": {
        RouteNo: "251/2Z",
        From: "Shamshabad",
        To: SEC_RTF,
        UP_Distance: "28.2",
        DN_Distance: "27.9",
        Route_Status: "",
    },

    "_251_3K": {
        RouteNo: "251/3K",
        From: "Shamshabad",
        To: "Cherlapally",
        UP_Distance: "37.5",
        DN_Distance: "37.2",
        Route_Status: "",
    },

    "_251_3KN": {
        RouteNo: "251/3KN",
        From: "Shamshabad",
        To: "Cherlapally",
        UP_Distance: "49.6",
        DN_Distance: "48",
        Route_Status: "",
    },

    "_251_5K": {
        RouteNo: "251/5K",
        From: "Shamshabad",
        To: SEC_ALF,
        UP_Distance: "30.6",
        DN_Distance: "29.6",
        Route_Status: "",
    },

    "_251_7Z": {
        RouteNo: "251/7Z",
        From: "Shamshabad",
        To: SEC_ALF,
        UP_Distance: "30.7",
        DN_Distance: "28.7",
        Route_Status: "",
    },

    "_251_8A": {
        RouteNo: "251/8A",
        From: "Kothur (Gudur)",
        To: SEC_ALF,
        UP_Distance: "45.7",
        DN_Distance: "43.8",
        Route_Status: "",
    },

    "_251_90L": {
        RouteNo: "251/90L",
        From: "Shamshabad",
        To: SEC_RTF,
        UP_Distance: "37.6",
        DN_Distance: "37.4",
        Route_Status: "",
    },

    "_251_188": {
        RouteNo: "251/188",
        From: "Shamshabad",
        To: "Mehdipatnam",
        UP_Distance: "28.2",
        DN_Distance: "28.7",
        Route_Status: "",
    },

    "_251_300": {
        RouteNo: "251/300",
        From: "Shamshabad",
        To: "Uppal X Roads",
        UP_Distance: "29.9",
        DN_Distance: "29.9",
        Route_Status: "",
    },

    "_251M": {
        RouteNo: "251M",
        From: "Afzalgunj",
        To: "Muchinthal",
        UP_Distance: "30.3",
        DN_Distance: "30.7",
        Route_Status: "",
    },

    "_252": {
        RouteNo: "252",
        From: "Afzalgunj",
        To: "Cherlapally Station",
        UP_Distance: "25.9",
        DN_Distance: "23.8",
        Route_Status: "",
    },

    "_252_3K": {
        RouteNo: "252/3K",
        From: "RGI Airport",
        To: "ECIL X Roads",
        UP_Distance: "45.9",
        DN_Distance: "44.6",
        Route_Status: "",
    },

    "_252_3KN": {
        RouteNo: "252/3KN",
        From: CRPLSTN,
        To: "Afzalgunj",
        UP_Distance: "23.8",
        DN_Distance: "25.9",
        Route_Status: "",
    },

    "_252_6IW": {
        RouteNo: "252/6IW",
        From: "Waverock",
        To: "Cherlapally",
        UP_Distance: "44.3",
        DN_Distance: "40.6",
        Route_Status: "",
    },

    "_252S": {
        RouteNo: "252S",
        From: "Afzalgunj",
        To: "Shankarapuram",
        UP_Distance: "26.4",
        DN_Distance: "26.5",
        Route_Status: "",
    },

    "_252S_8A": {
        RouteNo: "252S/8A",
        From: "Shankarapuram",
        To: SEC_ALF,
        UP_Distance: "38.1",
        DN_Distance: "36",
        Route_Status: "",
    },

    "_253": {
        RouteNo: "253",
        From: "Charminar",
        To: "Maheshwaram",
        UP_Distance: "27.9",
        DN_Distance: "28",
        Route_Status: "",
    },

    "_253_8A": {
        RouteNo: "253/8A",
        From: "Shamshabad",
        To: SEC_ALF,
        UP_Distance: "36.3",
        DN_Distance: "35",
        Route_Status: "",
    },

    "_253L_85": {
        RouteNo: "253L/85",
        From: "Annojiguda",
        To: "Charminar",
        UP_Distance: "40.6",
        DN_Distance: "40.8",
        Route_Status: "",
    },

    "_253L_102": {
        RouteNo: "253L/102",
        From: "Lemoor",
        To: "Koti Womens College",
        UP_Distance: "33.9",
        DN_Distance: "34.3",
        Route_Status: "",
    },

    "_253M_8A": {
        RouteNo: "253M/8A",
        From: "Maheshwaram",
        To: SEC_ALF,
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_253T_90": {
        RouteNo: "253T/90",
        From: "Tukkuguda Fab City",
        To: JBS,
        UP_Distance: "43.2",
        DN_Distance: "42.8",
        Route_Status: "",
    },

    "_253W": {
        RouteNo: "253W",
        From: "Koti Womens College",
        To: "Maheshwaram",
        UP_Distance: "33.9",
        DN_Distance: "33.5",
        Route_Status: "",
    },

    "_254_217": {
        RouteNo: "254/217",
        From: "Kongara Kalan",
        To: "Lingampally",
        UP_Distance: "57.5",
        DN_Distance: "58.3",
        Route_Status: "",
    },

    "_272": {
        RouteNo: "272",
        From: SEC_GRD,
        To: "Bowrampet",
        UP_Distance: "25.4",
        DN_Distance: "25.2",
        Route_Status: "",
    },

    "_272_83G": {
        RouteNo: "272/83G",
        From: "Gandimaisamma",
        To: "Kacheguda Station",
        UP_Distance: "30.7",
        DN_Distance: "32",
        Route_Status: "",
    },

    "_272_195": {
        RouteNo: "272/195",
        From: "Gandimaisamma",
        To: "Waverock",
        UP_Distance: "35.4",
        DN_Distance: "37",
        Route_Status: "",
    },

    "_272B": {
        RouteNo: "272B",
        From: SEC_GRD,
        To: "Bowrampet",
        UP_Distance: "25.4",
        DN_Distance: "25.2",
        Route_Status: "",
    },

    "_272G_9K": {
        RouteNo: "272G/9K",
        From: "Gandimaisamma",
        To: "Afzalgunj",
        UP_Distance: "30.9",
        DN_Distance: "30.8",
        Route_Status: "",
    },

    "_272G_9X": {
        RouteNo: "272G/9X",
        From: "Gandimaisamma",
        To: CBS,
        UP_Distance: "30.2",
        DN_Distance: "30.5",
        Route_Status: "",
    },

    "_272G_18": {
        RouteNo: "272G/18",
        From: "Gandimaisamma",
        To: "Uppal",
        UP_Distance: "31.1",
        DN_Distance: "32.6",
        Route_Status: "",
    },

    "_272G_29B": {
        RouteNo: "272G/29B",
        From: "Gandimaisamma",
        To: SEC_GRD,
        UP_Distance: "21.9",
        DN_Distance: "21.9",
        Route_Status: "",
    },

    "_272G_83J": {
        RouteNo: "272G/83J",
        From: "Gandimaisamma",
        To: "Kacheguda Station",
        UP_Distance: "30.7",
        DN_Distance: "32",
        Route_Status: "",
    },

    "_272G_189M": {
        RouteNo: "272G/189M",
        From: "Gandimaisamma",
        To: "Mehdipatnam",
        UP_Distance: "27.6",
        DN_Distance: "26.9",
        Route_Status: "",
    },

    "_272G_219": {
        RouteNo: "272G/219",
        From: "Gandimaisamma",
        To: "Patancheruvu",
        UP_Distance: "35.5",
        DN_Distance: "34.8",
        Route_Status: "",
    },

    "_272G_219I": {
        RouteNo: "272G/219I",
        From: "Gandimaisamma",
        To: "Isnapur",
        UP_Distance: "41.3",
        DN_Distance: "40.6",
        Route_Status: "",
    },

    "_272G_242": {
        RouteNo: "272G/242",
        From: "Gandimaisamma",
        To: "Keesaragutta",
        UP_Distance: "52.6",
        DN_Distance: "54",
        Route_Status: "",
    },

    "_272I_29B": {
        RouteNo: "272I/29B",
        From: "Indiramma Colony",
        To: SEC_GRD,
        UP_Distance: "22.6",
        DN_Distance: "22.7",
        Route_Status: "",
    },

    "_272J_29B": {
        RouteNo: "272J/29B",
        From: "JNNURM Colony",
        To: SEC_GRD,
        UP_Distance: "30.1",
        DN_Distance: "31.4",
        Route_Status: "",
    },

    "_273_24S": {
        RouteNo: "273/24S",
        From: "Gandimaisamma",
        To: "ECIL X Roads",
        UP_Distance: "33.2",
        DN_Distance: "31",
        Route_Status: "",
    },

    "_277": {
        RouteNo: "277",
        From: "MGBS",
        To: "Ibrahimpatnam",
        UP_Distance: "31.6",
        DN_Distance: "32.7",
        Route_Status: "",
    },

    "_277D": {
        RouteNo: "277D",
        From: "Koti Womens College",
        To: "Ibrahimpatnam",
        UP_Distance: "32.3",
        DN_Distance: "32.8",
        Route_Status: "",
    },

    "_277D_72": {
        RouteNo: "277D/72",
        From: "Ibrahimpatnam",
        To: "Afzalgunj",
        UP_Distance: "33.7",
        DN_Distance: "33.8",
        Route_Status: "",
    },

    "_277K": {
        RouteNo: "277K",
        From: "Koti Womens College",
        To: "Kongarakalan",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_277K_218": {
        RouteNo: "277K/218",
        From: "Kongara Kalan",
        To: MYPX,
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_277L": {
        RouteNo: "277L",
        From: LBNR,
        To: "Ibrahimpatnam",
        UP_Distance: "23.2",
        DN_Distance: "23.6",
        Route_Status: "",
    },

    "_277N": {
        RouteNo: "277N",
        From: "Koti Womens College",
        To: "Nadergul",
        UP_Distance: "20.2",
        DN_Distance: "19.6",
        Route_Status: "",
    },

    "_277S": {
        RouteNo: "277S",
        From: "Secretariate",
        To: "Ibrahimpatnam",
        UP_Distance: "36.3",
        DN_Distance: "37.1",
        Route_Status: "",
    },

    "_279": {
        RouteNo: "279",
        From: JBS,
        To: "Ibrahimpatnam",
        UP_Distance: "39.5",
        DN_Distance: "40.2",
        Route_Status: "",
    },

    "_279_229": {
        RouteNo: "279/229",
        From: "Ibrahimpatnam",
        To: "Medchal",
        UP_Distance: "64.9",
        DN_Distance: "63.7",
        Route_Status: "",
    },

    "_279U": {
        RouteNo: "279U",
        From: "Ibrahimpatnam",
        To: "Uppal",
        UP_Distance: "30.2",
        DN_Distance: "29.5",
        Route_Status: "",
    },

    "_280": {
        RouteNo: "280",
        From: SEC_RTF,
        To: "Ghatkesar",
        UP_Distance: "22.6",
        DN_Distance: "23.5",
        Route_Status: "",
    },

    "_280_20": {
        RouteNo: "280/20",
        From: "Ghatkesar",
        To: "Secretariate",
        UP_Distance: "29.2",
        DN_Distance: "28",
        Route_Status: "",
    },

    "_280_30": {
        RouteNo: "280/30",
        From: "Ghatkesar",
        To: "Jagathgirigutta",
        UP_Distance: "39.3",
        DN_Distance: "38.2",
        Route_Status: "",
    },

    "_280_115": {
        RouteNo: "280/115",
        From: "Ghatkesar",
        To: "Koti",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_280_219": {
        RouteNo: "280/219",
        From: "Ghatkesar",
        To: "Patancheruvu",
        UP_Distance: "54.6",
        DN_Distance: "54.4",
        Route_Status: "",
    },

    "_280_492": {
        RouteNo: "280/492",
        From: SEC_CS,
        To: "Pillaipally",
        UP_Distance: "35.5",
        DN_Distance: "36.4",
        Route_Status: "",
    },

    "_280_488": {
        RouteNo: "280/488",
        From: SEC_CS,
        To: "Bibi Nagar",
        UP_Distance: "35",
        DN_Distance: "35.9",
        Route_Status: "",
    },

    "_280B": {
        RouteNo: "280B",
        From: SEC_RTF,
        To: "Bogaram",
        UP_Distance: "31",
        DN_Distance: "31.8",
        Route_Status: "",
    },

    "_280I": {
        RouteNo: "280I",
        From: "Uppal X Roads",
        To: "Infosys",
        UP_Distance: "14",
        DN_Distance: "14.2",
        Route_Status: "",
    },

    "_280J": {
        RouteNo: "280J",
        From: JBS,
        To: "Ghatkesar",
        UP_Distance: "24.6",
        DN_Distance: "25.8",
        Route_Status: "",
    },

    "_280N": {
        RouteNo: "280N",
        From: SEC_RTF,
        To: "NFC Nagar",
        UP_Distance: "27",
        DN_Distance: "27.9",
        Route_Status: "",
    },

    "_280X": {
        RouteNo: "280X",
        From: "Uppal X Roads",
        To: "Ghatkesar",
        UP_Distance: "14.5",
        DN_Distance: "14.6",
        Route_Status: "",
    },

    "_281": {
        RouteNo: "281",
        From: "ECIL X Roads",
        To: "Ghatkesar",
        UP_Distance: "16.3",
        DN_Distance: "16.1",
        Route_Status: "",
    },

    "_281_3K": {
        RouteNo: "281/3K",
        From: "Ghatkesar",
        To: "Afzalgunj",
        UP_Distance: "36.1",
        DN_Distance: "36.5",
        Route_Status: "",
    },

    "_281_6L": {
        RouteNo: "281/6L",
        From: "Ghatkesar",
        To: "Kondapur",
        UP_Distance: "54.2",
        DN_Distance: "52.8",
        Route_Status: "",
    },

    "_281_16C": {
        RouteNo: "281/16C",
        From: "Ghatkesar",
        To: SEC_BS,
        UP_Distance: "30",
        DN_Distance: "29.8",
        Route_Status: "",
    },

    "_281_22": {
        RouteNo: "281/22",
        From: "Ghatkesar",
        To: "Hakimpet",
        UP_Distance: "35.3",
        DN_Distance: "35.1",
        Route_Status: "",
    },

    "_281_24B": {
        RouteNo: "281/24B",
        From: "Ghatkesar",
        To: SEC_GRD,
        UP_Distance: "32.5",
        DN_Distance: "31.6",
        Route_Status: "",
    },

    "_281_24L": {
        RouteNo: "281/24L",
        From: "Ghatkesar",
        To: SEC_GRD,
        UP_Distance: "32.9",
        DN_Distance: "31.2",
        Route_Status: "",
    },

    "_281_25S": {
        RouteNo: "281/25S",
        From: "Ghatkesar",
        To: "Suchitra",
        UP_Distance: "33.7",
        DN_Distance: "32.8",
        Route_Status: "",
    },

    "_281_113M": {
        RouteNo: "281/113M",
        From: "Ghatkesar",
        To: "Kondapur",
        UP_Distance: "54.2",
        DN_Distance: "52.8",
        Route_Status: "",
    },

    "_281_250": {
        RouteNo: "281/250",
        From: "Ghatkesar",
        To: SEC_BS,
        UP_Distance: "30.6",
        DN_Distance: "30.4",
        Route_Status: "",
    },

    "_281R_16A": {
        RouteNo: "281R/16A",
        From: "RTC Colony",
        To: SEC_BS,
        UP_Distance: "22.5",
        DN_Distance: "21.2",
        Route_Status: "",
    },

    "_282K": {
        RouteNo: "282K",
        From: "Ghatkesar",
        To: "Kondapur",
        UP_Distance: "54.2",
        DN_Distance: "52.8",
        Route_Status: "",
    },

    "_283C": {
        RouteNo: "283C",
        From: SEC_GRD,
        To: "Suraram Colony",
        UP_Distance: "20.5",
        DN_Distance: "18.4",
        Route_Status: "",
    },

    "_283D_9X": {
        RouteNo: "283D/9X",
        From: "Suraram Colony",
        To: CBS,
        UP_Distance: "26.7",
        DN_Distance: "29.1",
        Route_Status: "",
    },

    "_283K": {
        RouteNo: "283K",
        From: SEC_RTF,
        To: "Korremula",
        UP_Distance: "20.9",
        DN_Distance: "21.1",
        Route_Status: "",
    },

    "_283RG": {
        RouteNo: "283RG",
        From: SEC_GRD,
        To: "Rajiv Gruhakalpa",
        UP_Distance: "22.1",
        DN_Distance: "22.3",
        Route_Status: "",
    },

    "_283T": {
        RouteNo: "283T",
        From: SEC_RTF,
        To: "Tenugudem",
        UP_Distance: "21.1",
        DN_Distance: "21.5",
        Route_Status: "",
    },

    "_283VS": {
        RouteNo: "283VS",
        From: SEC_GRD,
        To: "Suraram Village",
        UP_Distance: "19.1",
        DN_Distance: "19",
        Route_Status: "",
    },

    "_283S_18": {
        RouteNo: "283S/18",
        From: "Korremula",
        To: SEC_RTF,
        UP_Distance: "21.1",
        DN_Distance: "20.9",
        Route_Status: "",
    },

    "_284P": {
        RouteNo: "284P",
        From: "Uppal X Roads",
        To: "Prathap Singaram",
        UP_Distance: "11.6",
        DN_Distance: "11.3",
        Route_Status: "",
    },

    "_288": {
        RouteNo: "288",
        From: "Mehdipatnam",
        To: "Moinabad",
        UP_Distance: "22.4",
        DN_Distance: "22.3",
        Route_Status: "",
    },

    "_288_113M": {
        RouteNo: "288/113M",
        From: "Moinabad",
        To: "Uppal",
        UP_Distance: "38.9",
        DN_Distance: "40",
        Route_Status: "",
    },

    "_288A": {
        RouteNo: "288A",
        From: "Mehdipatnam",
        To: "Amdapur",
        UP_Distance: "26.2",
        DN_Distance: "28.4",
        Route_Status: "",
    },

    "_288C": {
        RouteNo: "288C",
        From: "Mehdipatnam",
        To: "Appojiguda",
        UP_Distance: "24.3",
        DN_Distance: "24.3",
        Route_Status: "",
    },

    "_288D": {
        RouteNo: "288D",
        From: "Mehdipatnam",
        To: "Chilkoor Balaji Temple",
        UP_Distance: "21",
        DN_Distance: "21",
        Route_Status: "",
    },

    "_288E": {
        RouteNo: "288E",
        From: "Mehdipatnam",
        To: "Bakaram",
        UP_Distance: "23.5",
        DN_Distance: "23.6",
        Route_Status: "",
    },

    "_288K": {
        RouteNo: "288K",
        From: "Koti",
        To: "Moinabad",
        UP_Distance: "29.7",
        DN_Distance: "30",
        Route_Status: "",
    },

    "_288NB": {
        RouteNo: "288NB",
        From: "Mehdipatnam",
        To: "Bakaram",
        UP_Distance: "23",
        DN_Distance: "23.1",
        Route_Status: "",
    },

    "_288R": {
        RouteNo: "288R",
        From: "Mehdipatnam",
        To: "Chinna Managalaram",
        UP_Distance: "30",
        DN_Distance: "30",
        Route_Status: "",
    },

    "_288Y": {
        RouteNo: "288Y",
        From: "Mehdipatnam",
        To: "Elkaguda",
        UP_Distance: "33.5",
        DN_Distance: "33.5",
        Route_Status: "",
    },

    "_288D_19K": {
        RouteNo: "288D/19K",
        From: "Chilkoor Balaji Temple",
        To: "kukatpally",
        UP_Distance: "33.9",
        DN_Distance: "34",
        Route_Status: "",
    },

    "_290": {
        RouteNo: "290",
        From: JBS,
        To: "Hayathnagar",
        UP_Distance: "24.8",
        DN_Distance: "24.7",
        Route_Status: "",
    },

    "_290_229": {
        RouteNo: "290/229",
        From: "Hayathnagar",
        To: "Medchal",
        UP_Distance: "49.4",
        DN_Distance: "49",
        Route_Status: "",
    },

    "_290KJ": {
        RouteNo: "290KJ",
        From: JBS,
        To: "Kuntloor",
        UP_Distance: "25.2",
        DN_Distance: "26.3",
        Route_Status: "",
    },

    "_290KP": {
        RouteNo: "290KP",
        From: SEC_CS,
        To: "Kavadipalli",
        UP_Distance: "32.2",
        DN_Distance: "33.4",
        Route_Status: "",
    },

    "_290U": {
        RouteNo: "290U",
        From: JBS,
        To: "Hayathnagar",
        UP_Distance: "22.4",
        DN_Distance: "23.6",
        Route_Status: "",
    },

    "_290U_201": {
        RouteNo: "290U/201",
        From: JBS,
        To: "Bacharam",
        UP_Distance: "37.2",
        DN_Distance: "38.2",
        Route_Status: "",
    },

    "_290U_201T": {
        RouteNo: "290U/201T",
        From: JBS,
        To: "Taramatipet",
        UP_Distance: "31.3",
        DN_Distance: "32.4",
        Route_Status: "",
    },

    "_290U_202K": {
        RouteNo: "290U/202K",
        From: JBS,
        To: "Koheda",
        UP_Distance: "32.5",
        DN_Distance: "32.8",
        Route_Status: "",
    },

    "_290U_204": {
        RouteNo: "290U/204",
        From: JBS,
        To: "Gandicheruvu",
        UP_Distance: "31.8",
        DN_Distance: "32.3",
        Route_Status: "",
    },

    "_290U_205A": {
        RouteNo: "290U/205A",
        From: JBS,
        To: "Anajpur",
        UP_Distance: "37.5",
        DN_Distance: "36.9",
        Route_Status: "",
    },

    "_290U_205B": {
        RouteNo: "290U/205B",
        From: SEC_CS,
        To: "Balijaguda",
        UP_Distance: "34.4",
        DN_Distance: "35.6",
        Route_Status: "",
    },

    "_290U_205M": {
        RouteNo: "290U/205M",
        From: JBS,
        To: "Majeedpur",
        UP_Distance: "37.8",
        DN_Distance: "37.3",
        Route_Status: "",
    },

    "_290U_229": {
        RouteNo: "290U/229",
        From: "Hayathnagar",
        To: "Medchal",
        UP_Distance: "48.3",
        DN_Distance: "46.7",
        Route_Status: "",
    },

    "_290U_463": {
        RouteNo: "290U/463",
        From: JBS,
        To: "Deshmukhi",
        UP_Distance: "39.9",
        DN_Distance: "42.9",
        Route_Status: "",
    },

    "_290U_555": {
        RouteNo: "290U/555",
        From: SEC_CS,
        To: "Chotuppal",
        UP_Distance: "53.4",
        DN_Distance: "53.1",
        Route_Status: "",
    },

    "_290UA": {
        RouteNo: "290UA",
        From: JBS,
        To: "Anajpur",
        UP_Distance: "37.5",
        DN_Distance: "37.8",
        Route_Status: "",
    },

    "_290UF": {
        RouteNo: "290UF",
        From: JBS,
        To: "Mettu",
        UP_Distance: "31.6",
        DN_Distance: "32.9",
        Route_Status: "",
    },

    "_290UJ": {
        RouteNo: "290UJ",
        From: JBS,
        To: "JNNURM Colony",
        UP_Distance: "31.3",
        DN_Distance: "35.1",
        Route_Status: "",
    },

    "_299": {
        RouteNo: "299",
        From: KOTI_W,
        To: "Hayathnagar",
        UP_Distance: "15.3",
        DN_Distance: "16.2",
        Route_Status: "",
    },

    "_299_1D": {
        RouteNo: "299/1D",
        From: "Hayathnagar",
        To: SEC_RTF,
        UP_Distance: "22.8",
        DN_Distance: "21.8",
        Route_Status: "",
    },

    "_299_100": {
        RouteNo: "299/100",
        From: "Hayathnagar",
        To: "Secretariate",
        UP_Distance: "21.5",
        DN_Distance: "19.8",
        Route_Status: "",
    },

    "_299_156": {
        RouteNo: "299/156",
        From: "Hayathnagar",
        To: "Mehdipatnam",
        UP_Distance: "24.1",
        DN_Distance: "23.1",
        Route_Status: "",
    },

    "_299D": {
        RouteNo: "299D",
        From: "Hayathnagar",
        To: "Dilshuknagar",
        UP_Distance: "11.6",
        DN_Distance: "10.7",
        Route_Status: "",
    },

    "_300": {
        RouteNo: "300",
        From: UPLX,
        To: "Mehdipatnam",
        UP_Distance: "32.2",
        DN_Distance: "32.5",
        Route_Status: "",
    },

    "_300_18J": {
        RouteNo: "300/18J",
        From: "Mehdipatnam",
        To: JBS,
        UP_Distance: "42.1",
        DN_Distance: "41.7",
        Route_Status: "",
    },

    "_300_90": {
        RouteNo: "300/90",
        From: "Mehdipatnam",
        To: SEC_RTF,
        UP_Distance: "39.6",
        DN_Distance: "40.1",
        Route_Status: "",
    },

    "_300_118W": {
        RouteNo: "300/118W",
        From: JBS,
        To: "Waverock",
        UP_Distance: "56.3",
        DN_Distance: "57.8",
        Route_Status: "",
    },

    "_300_126": {
        RouteNo: "300/126",
        From: LBNR,
        To: "JNTU College",
        UP_Distance: "41.6",
        DN_Distance: "40.9",
        Route_Status: "",
    },

    "_300_217": {
        RouteNo: "300/217",
        From: LBNR,
        To: "Patancheruvu",
        UP_Distance: "49.7",
        DN_Distance: "50.6",
        Route_Status: "",
    },

    "_300_241": {
        RouteNo: "300/241",
        From: "Aramghar",
        To: "DRDO Yadgarpally",
        UP_Distance: "47.3",
        DN_Distance: "46.7",
        Route_Status: "",
    },

    "_300_251": {
        RouteNo: "300/251",
        From: "Uppal X Roads",
        To: "Shamshabad",
        UP_Distance: "29.9",
        DN_Distance: "29.9",
        Route_Status: "",
    },

    "_300_316": {
        RouteNo: "300/316",
        From: "Hayathnagar",
        To: "Gachibowli",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_300_532": {
        RouteNo: "300/532",
        From: "Uppal X Roads",
        To: "JP Dargah",
        UP_Distance: "55.6",
        DN_Distance: "55.6",
        Route_Status: "",
    },

    "_300_539": {
        RouteNo: "300/539",
        From: SEC_RTF,
        To: "Kanha",
        UP_Distance: "66",
        DN_Distance: "65.6",
        Route_Status: "",
    },

    "_300A": {
        RouteNo: "300A",
        From: LBNR,
        To: "Aramghar",
        UP_Distance: "14.6",
        DN_Distance: "15",
        Route_Status: "",
    },

    "_300D_126": {
        RouteNo: "300D/126",
        From: "Dilshuknagar",
        To: "JNTU College",
        UP_Distance: "46.1",
        DN_Distance: "45.3",
        Route_Status: "",
    },

    "_300H": {
        RouteNo: "300H",
        From: "Mehdipatnam",
        To: "Hayathnagar",
        UP_Distance: "31.9",
        DN_Distance: "32.5",
        Route_Status: "",
    },

    "_300J": {
        RouteNo: "300J",
        From: "Mehdipatnam",
        To: JBS,
        UP_Distance: "42.1",
        DN_Distance: "41.7",
        Route_Status: "",
    },

    "_300L": {
        RouteNo: "300L",
        From: LBNR,
        To: "Mehdipatnam",
        UP_Distance: "25.4",
        DN_Distance: "25.7",
        Route_Status: "",
    },

    "_301": {
        RouteNo: "301",
        From: "Cherlapally Station",
        To: "Shamshabad",
        UP_Distance: "41.7",
        DN_Distance: "41.8",
        Route_Status: "",
    },

    "_316_156": {
        RouteNo: "316/156",
        From: "Gachibowli",
        To: "Dilshuknagar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_316_300": {
        RouteNo: "316/300",
        From: "Gachibowli",
        To: "Hayathnagar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_316_593": {
        RouteNo: "316/593",
        From: "Gachibowli",
        To: "Chevella",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_316L": {
        RouteNo: "316L",
        From: "Gachibowli",
        To: "Aramghar",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_412": {
        RouteNo: "412",
        From: "Koti Womens College",
        To: "Mall",
        UP_Distance: "60.7",
        DN_Distance: "60.9",
        Route_Status: "",
    },

    "_443": {
        RouteNo: "443",
        From: "Mehdipatnam",
        To: "Nakkalapally",
        UP_Distance: "36.3",
        DN_Distance: "36.2",
        Route_Status: "",
    },

    "_444": {
        RouteNo: "444",
        From: "Mehdipatnam",
        To: "Medipally",
        UP_Distance: "32.8",
        DN_Distance: "32.8",
        Route_Status: "",
    },

    "_445": {
        RouteNo: "445",
        From: "Mehdipatnam",
        To: "Ketireddypally",
        UP_Distance: "33",
        DN_Distance: "33",
        Route_Status: "",
    },

    "_447R": {
        RouteNo: "447R",
        From: "Mehdipatnam",
        To: "Ravulapally",
        UP_Distance: "35",
        DN_Distance: "35",
        Route_Status: "",
    },

    "_452": {
        RouteNo: "452",
        From: "Afzalgunj",
        To: "Maheshwaram",
        UP_Distance: "47.6",
        DN_Distance: "47.5",
        Route_Status: "",
    },

    "_453": {
        RouteNo: "453",
        From: "Afzalgunj",
        To: "Gudur",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_458": {
        RouteNo: "458",
        From: "Afzalgunj",
        To: "Maheshwaram",
        UP_Distance: "39.5",
        DN_Distance: "40",
        Route_Status: "",
    },

    "_463": {
        RouteNo: "463",
        From: "Dilshuknagar",
        To: "Deshmukhi",
        UP_Distance: "28.3",
        DN_Distance: "30.8",
        Route_Status: "",
    },

    "_463_290U": {
        RouteNo: "463/290U",
        From: "Deshmukhi",
        To: JBS,
        UP_Distance: "42.9",
        DN_Distance: "39.9",
        Route_Status: "",
    },

    "_464": {
        RouteNo: "464",
        From: "Dilshuknagar",
        To: "Dandumailaram",
        UP_Distance: "35.1",
        DN_Distance: "35.1",
        Route_Status: "",
    },

    "_488_280": {
        RouteNo: "488/280",
        From: "Bibi Nagar",
        To: SEC_CS,
        UP_Distance: "35.9",
        DN_Distance: "35",
        Route_Status: "",
    },

    "_490S": {
        RouteNo: "490S",
        From: SEC_CS,
        To: "Bibi Nagar",
        UP_Distance: "42.7",
        DN_Distance: "43.7",
        Route_Status: "",
    },

    "_492_280": {
        RouteNo: "492/280",
        From: "Pillaipally",
        To: SEC_RTF,
        UP_Distance: "36.4",
        DN_Distance: "35.5",
        Route_Status: "",
    },

    "_493": {
        RouteNo: "493",
        From: SEC_CS,
        To: "Jainapally",
        UP_Distance: "38",
        DN_Distance: "38.9",
        Route_Status: "",
    },

    "_495": {
        RouteNo: "495",
        From: SEC_GRD,
        To: "Kanukunta",
        UP_Distance: "42.2",
        DN_Distance: "42.3",
        Route_Status: "",
    },

    "_496": {
        RouteNo: "496",
        From: "ECIL X Roads",
        To: "Jiyapally",
        UP_Distance: "22.4",
        DN_Distance: "22.2",
        Route_Status: "",
    },

    "_496_17H": {
        RouteNo: "496/17H",
        From: "Jiyapally",
        To: SEC_BS,
        UP_Distance: "36",
        DN_Distance: "34.4",
        Route_Status: "",
    },

    "_497": {
        RouteNo: "497",
        From: "ECIL X Roads",
        To: "Hajipur",
        UP_Distance: "28.1",
        DN_Distance: "27.9",
        Route_Status: "",
    },

    "_498": {
        RouteNo: "498",
        From: SEC_BS,
        To: "Keshavapur",
        UP_Distance: "36.9",
        DN_Distance: "38.4",
        Route_Status: "",
    },

    "_498K": {
        RouteNo: "498K",
        From: SEC_GRD,
        To: "Kothapally",
        UP_Distance: "45.7",
        DN_Distance: "45.7",
        Route_Status: "",
    },

    "_498U": {
        RouteNo: "498U",
        From: SEC_BS,
        To: "Uddhamarri",
        UP_Distance: "41.4",
        DN_Distance: "42.9",
        Route_Status: "",
    },

    "_498VJ": {
        RouteNo: "498VJ",
        From: SEC_GRD,
        To: "Jinnaram",
        UP_Distance: "38.4",
        DN_Distance: "38.4",
        Route_Status: "",
    },

    "_505": {
        RouteNo: "505",
        From: "Mehdipatnam",
        To: "Shankarpally",
        UP_Distance: "37.1",
        DN_Distance: "37.1",
        Route_Status: "",
    },

    "_505_19S": {
        RouteNo: "505/19S",
        From: "Shankarpally",
        To: "Sanath Nagar",
        UP_Distance: "48.1",
        DN_Distance: "47.8",
        Route_Status: "",
    },

    "_505_156": {
        RouteNo: "505/156",
        From: "Shankarpally",
        To: "Hayathnagar",
        UP_Distance: "60.2",
        DN_Distance: "61.2",
        Route_Status: "",
    },

    "_505_156V": {
        RouteNo: "505/156V",
        From: "Shankarpally",
        To: "NGOs colony",
        UP_Distance: "58.6",
        DN_Distance: "58.6",
        Route_Status: "",
    },

    "_511": {
        RouteNo: "511",
        From: SEC_GRD,
        To: "Narsapur",
        UP_Distance: "48.6",
        DN_Distance: "48.7",
        Route_Status: "",
    },

    "_511B": {
        RouteNo: "511B",
        From: "Bala Nagar",
        To: "Narsapur",
        UP_Distance: "39.6",
        DN_Distance: "39.6",
        Route_Status: "",
    },

    "_523K": {
        RouteNo: "523K",
        From: "Koti Womens College",
        To: "Kavadipalli",
        UP_Distance: "27.6",
        DN_Distance: "28.7",
        Route_Status: "",
    },

    "_524": {
        RouteNo: "524",
        From: "Dilshuknagar",
        To: "Pochampally",
        UP_Distance: "37.1",
        DN_Distance: "37.3",
        Route_Status: "",
    },

    "_530": {
        RouteNo: "530",
        From: "Afzalgunj",
        To: "Kandukur",
        UP_Distance: "58.2",
        DN_Distance: "58.7",
        Route_Status: "",
    },

    "_532": {
        RouteNo: "532",
        From: "Afzalgunj",
        To: "JP Dargah",
        UP_Distance: "43.4",
        DN_Distance: "43.3",
        Route_Status: "",
    },

    "_532_8A": {
        RouteNo: "532/8A",
        From: "Kothur (Shadnagar)",
        To: SEC_ALF,
        UP_Distance: "45.7",
        DN_Distance: "43.8",
        Route_Status: "",
    },

    "_532_300": {
        RouteNo: "532/300",
        From: "JP Dargha",
        To: "Uppal X Roads",
        UP_Distance: "55.6",
        DN_Distance: "55.6",
        Route_Status: "",
    },

    "_532S": {
        RouteNo: "532S",
        From: "Afzalgunj",
        To: "Sidhdhapur",
        UP_Distance: "52.3",
        DN_Distance: "52.2",
        Route_Status: "",
    },

    "_532V": {
        RouteNo: "532V",
        From: "Afzalgunj",
        To: "Kondareddipally",
        UP_Distance: "62",
        DN_Distance: "61.9",
        Route_Status: "",
    },

    "_537": {
        RouteNo: "537",
        From: "Afzalgunj",
        To: "Kodicherla",
        UP_Distance: "41.9",
        DN_Distance: "41.8",
        Route_Status: "",
    },

    "_539": {
        RouteNo: "539",
        From: "Afzalgunj",
        To: "Kanha",
        UP_Distance: "45.1",
        DN_Distance: "44.9",
        Route_Status: "",
    },

    "_539_1Z": {
        RouteNo: "539/1Z",
        From: "Kanha",
        To: SEC_RTF,
        UP_Distance: "54.5",
        DN_Distance: "54.2",
        Route_Status: "",
    },

    "_539_8A": {
        RouteNo: "539/8A",
        From: "Kanha",
        To: SEC_ALF,
        UP_Distance: "56.6",
        DN_Distance: "54.7",
        Route_Status: "",
    },

    "_539_300": {
        RouteNo: "539/300",
        From: "Kanha",
        To: SEC_RTF,
        UP_Distance: "65.6",
        DN_Distance: "66",
        Route_Status: "",
    },

    "_546": {
        RouteNo: "546",
        From: "ECIL X Roads",
        To: "Bhuvanagiri",
        UP_Distance: "59.4",
        DN_Distance: "59.2",
        Route_Status: "",
    },

    "_555": {
        RouteNo: "555",
        From: "Dilshuknagar",
        To: "Chotuppal",
        UP_Distance: "43.8",
        DN_Distance: "44.5",
        Route_Status: "",
    },

    "_555_290U": {
        RouteNo: "555/290U",
        From: "Chotuppal",
        To: SEC_CS,
        UP_Distance: "53.1",
        DN_Distance: "53.4",
        Route_Status: "",
    },

    "_564": {
        RouteNo: "564",
        From: SEC_GRD,
        To: "Nagireddypally",
        UP_Distance: "57.4",
        DN_Distance: "58.3",
        Route_Status: "",
    },

    "_567": {
        RouteNo: "567",
        From: SEC_GRD,
        To: "Markook",
        UP_Distance: "58.2",
        DN_Distance: "58",
        Route_Status: "",
    },

    "_568": {
        RouteNo: "568",
        From: SEC_GRD,
        To: "Damarakunta",
        UP_Distance: "49.8",
        DN_Distance: "49.6",
        Route_Status: "",
    },

    "_571T": {
        RouteNo: "571T",
        From: SEC_BS,
        To: "Thimmapur",
        UP_Distance: "53",
        DN_Distance: "54.7",
        Route_Status: "",
    },

    "_577": {
        RouteNo: "577",
        From: "ECIL X Roads",
        To: "Dharmaram",
        UP_Distance: "52.3",
        DN_Distance: "52",
        Route_Status: "",
    },

    "_578": {
        RouteNo: "578",
        From: SEC_BS,
        To: "M Turkapally",
        UP_Distance: "41.2",
        DN_Distance: "41.1",
        Route_Status: "",
    },

    "_580": {
        RouteNo: "580",
        From: SEC_BS,
        To: "Yadagirigutta",
        UP_Distance: "71.3",
        DN_Distance: "72.9",
        Route_Status: "",
    },

    "_589": {
        RouteNo: "589",
        From: SEC_GRD,
        To: "Ramayampet",
        UP_Distance: "83.2",
        DN_Distance: "82.2",
        Route_Status: "",
    },

    "_592": {
        RouteNo: "592",
        From: "Mehdipatnam",
        To: "Kandwada",
        UP_Distance: "37.9",
        DN_Distance: "37.9",
        Route_Status: "",
    },

    "_593": {
        RouteNo: "593",
        From: "Mehdipatnam",
        To: "Chevella",
        UP_Distance: "39.7",
        DN_Distance: "39.8",
        Route_Status: "",
    },

    "_593_316": {
        RouteNo: "593/316",
        From: "Chevella",
        To: "Gachibowli",
        UP_Distance: "",
        DN_Distance: "",
        Route_Status: "",
    },

    "_702_212": {
        RouteNo: "702/212",
        From: "Vargal Temple",
        To: SEC_GRD,
        UP_Distance: "49.6",
        DN_Distance: "49.7",
        Route_Status: "",
    },
}
