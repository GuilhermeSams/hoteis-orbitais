import ReactStars from 'react-rating-stars-component'

type DataReviewService = {
    star: number
    title: string
    description: string
    profileURL: string
    name: string
    occupation: string
}

export default function CardReviewService(props: DataReviewService) {
    function GetImageProfile() {
        const profileURL = props.profileURL
        return profileURL
    }

    return (
        <div className="mb-14  inline-block space-y-2 rounded-[8px] p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-[410px]:p-4">
            <div>
                <ReactStars
                    count={5}
                    edit={false}
                    size={24}
                    isHalf={true}
                    value={props.star}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    color="#bbbaba"
                />
            </div>
            <div>
                <h2 className="text-lg font-extrabold text-[#2ee7ff]">
                    {props.title}
                </h2>
            </div>
            <div className="grid h-32 w-80 max-[410px]:w-full">
                <p className=" text-sm text-white">{props.description}</p>
            </div>
            <div className="flex items-center pt-4">
                <div
                    className="h-14 w-14 rounded-full bg-contain bg-no-repeat outline outline-2  outline-offset-2 outline-[#2ee7ff]"
                    style={{ backgroundImage: `url(${GetImageProfile()})` }}
                ></div>
                <div className=" ml-4">
                    <div className=" font-bold text-[#2ee7ff]">
                        {props.name}
                    </div>
                    <div>
                        <p className="text-sm text-white">{props.occupation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
