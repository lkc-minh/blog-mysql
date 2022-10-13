import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
    return (
        <div className="Single">
            <div className="content">
                <img
                    src="https://images.pexels.com/photos/13761592/pexels-photo-13761592.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt=""
                />
                <div className="user">
                    <img
                        src="https://images.pexels.com/photos/13937077/pexels-photo-13937077.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt=""
                    />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>

                <h1>Let private firms build more airports, analysts propose</h1>
                <p>
                    <p>
                        Letting public companies invest in new airports would help improve
                        the country’s infrastructure to meet rising demand and reduce
                        dependency on state-owned enterprises, analysts have said.
                        Transportation demand is a key factor in the modern economy as
                        both businesspeople and tourists have a need to travel to many
                        places, even distant destinations, in the shortest time possible,
                        said former head of the Vietnam Institute of Economics Tran Dinh
                        Thien at a Tuesday forum.
                    </p>
                    <br />
                    <p>
                        The aviation industry therefore plays an important role in
                        boosting travel thanks to its high speed, and without new airports
                        many localities will forever lay "in the dark," he added.
                    </p>
                    <br />
                    <p>
                        Van Don International Airport in the northern province of Quang
                        Ninh, the first airport built by private investors in Vietnam, has
                        proved that private companies can build an airport with speed and
                        efficiency, Thien said.
                    </p>
                    <br />
                    <p>
                        "Private companies might even be more solid than state-owned
                        enterprises. Letting them build airports will increase the
                        openness of the country and boost development."
                    </p>
                    <br />
                    <p>
                        Nguyen Van Vinh, deputy head of the Vietnam Institute for
                        Development Strategies, said that private investors should be
                        given the chance to decide how big an airport should be to ensure
                        cost-effectiveness, while the government only needs to create a
                        transparent legal framework so private firms are assured in
                        public-private investment projects.
                    </p>
                    <br />
                    <p>
                        Nguyen Dinh Cung, former head of the Central Institute for
                        Economic Management, said that two-thirds of Vietnam’s planned
                        airports, especially small ones, should be invested via private
                        funding as the state-run Airports Corporation of Vietnam has
                        limited resources.
                    </p>
                    <br />
                    <p>
                        Many localities in Vietnam have been proposing new airports in
                        recent years as demand travel rises.
                    </p>
                    <br />
                    <p>
                        Lao Cai Province, a northern locality famous for mountainous Sa Pa
                        Town, welcomed 5.2 million tourists in 2019 (before Covid-19), up
                        from 2.8 million in 2015.
                    </p>
                    <br />
                    <p>
                        Its deputy chairman Nguyen Trong Hai said that a new airport would
                        help improve the country’s logistics and economic growth.
                    </p>
                    <br />
                    <p>
                        The province is now looking for a private investor to build a VND7
                        trillion airport under a public-private partnership. Bidding is
                        set to open in November.
                    </p>
                    <br />
                    <p>
                        Cung said localities that are seeking permission for airport
                        construction have a legitimate demand and their proposals should
                        be included in the country’s aviation plan for the next decades.
                    </p>
                    <br />
                    <p>
                        Instead of limiting the country’s number of airports to 28 by 2030
                        or 31 by 2050, the government should plan for more airports and
                        let each locality decide whether it needs one based on actual
                        demand.
                    </p>
                    <br />
                    <p>
                        Phan Duc Hieu, a standing member of the National Assembly’s
                        Economic Committee, said that an airport not only boosts a
                        province’s economic prospects but could also play a key role in
                        supporting social needs like receiving aid during natural
                        disasters.
                    </p>
                    <br />
                    <p>
                        Authorities should consider all benefits of an airport and approve
                        proposals quickly, he added.
                    </p>
                    <br />
                    <p>
                        Vietnam currently has 22 civilian airports, but the biggest ones
                        in Ho Chi Minh City and Hanoi have been overloaded for years,
                        driving the need for new constructions and upgrades.
                    </p>
                    <br />
                </p>
            </div>
            <Menu />
        </div>
    );
}

export default Single;
