import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IReview} from "../../models/review";
import CommentTree from "../comment/CommentTree";
import LikeButton from "../LikeButton";
import Typography from "@mui/material/Typography";
import Tag from "../Tag";
import {getReviewById} from "../../shared/api/requests/review";
import {Box, Container, useTheme} from "@mui/material";
import MarkdownEditor from "@uiw/react-markdown-editor";

function Review() {

    //add user info, rating, subject

    const theme = useTheme()

    const {id} = useParams();
    const [review, setReview] = useState<IReview>()

    useEffect(() => {
        const fetchReview = async () => {
            return await getReviewById(Number(id))
        }

        fetchReview()
            .then((data) => {
                setReview(data)
                console.log(review)
            })
    }, []);

    return (

        <Box
            mt={8}
            mb={12}
        >
            <Container>
                <Typography variant='caption'>{review?.user?.username}</Typography>
                <Typography variant='overline'>{review?.subject.category.name}</Typography>
                <Typography variant='h2'>{review?.subject.name}: review</Typography>
                <Typography variant='h5'>{review?.title}</Typography>

                <img src={review?.coverImageUrl} alt={review?.title}/>

                <div data-color-mode={theme.palette.mode}>
                    <MarkdownEditor.Markdown source={review?.text}/>
                </div>

                {review?.tags.map((tag) =>
                    <Tag tag={tag} key={tag.id}/>
                )}

                <LikeButton review={review!} key={review?.id}/>
                <CommentTree comments={review?.comments!}/>
            </Container>
        </Box>
    )
}

export default Review