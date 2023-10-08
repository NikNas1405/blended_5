import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
// import { comments } from "../../helpers/comments";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/filterSlice";

export const Comments = () => {
  const { data: comments } = useGetCommentsQuery();
  const filterComment = useSelector(getFilter);

  const filteredComments = () => {
    if (!comments) {
      return;
    }
    return comments.filter(({ content }) => content.toLowerCase().includes(filterComment.toLowerCase()));
  };

  return (
    <Grid>
      {filteredComments()?.length > 0 && filteredComments().map((comment) => <Comment key={comment.id} {...comment} />)}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
