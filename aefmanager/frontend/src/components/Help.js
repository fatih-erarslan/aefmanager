import React, {Fragment} from "react";
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

export default function Help() {
    return (
        <Fragment>
            <div className="card card-body mt-4 mb-4 container">
                <Card>
                    <CardBody>
                        <CardTitle><h3> HOW TO USE THIS TOOL </h3></CardTitle>
                        <CardSubtitle> Instructions</CardSubtitle>
                        <CardText>
                            You can use this tool frequently, once a week or once a month. Reflect on each dimension,
                            answering the questions below.
                            <p>
                                1. How do you feel you have been doing on this dimension? Rate yourself on the scale of
                                1 to 5:
                            </p>

                            <p> 1= I am not aware of this ability/skill in myself
                            </p>
                            <p> 2= I need support for improving this ability/skill
                            </p>

                            <p> 3= I feel competent in this ability/skill some of the time
                            </p>

                            <p> 4= I feel competent in this ability/skill most of the time
                            </p>

                            <p>

                            </p>

                            <p> 5= I feel competent enough in this ability/skill to support to others in developing it
                            </p>

                            <p>
                                2. Enter a number on the respective level in the form (from 1 to 5).
                            </p>
                            <p> 3. Once you have reflected on all the dimensions, connect the dots. What does it look
                                like? Is it ‘spiky’, with high scores in some and low scores in others? Ideally your
                                diagram should be an even circle as close as possible to the outer rim.
                            </p>

                            <p> 4. Note one practical step for each dimension which will help you improve your diagram
                                for the next time.
                            </p>

                            <p> 5. You may wish to share your diagram with another educator and invite them to create
                                their own, so that you can compare them and exchange ideas on how you can support each
                                other in making improvements.
                            </p>

                            <p> 2. If you put the cursor on each of the dimensions an pop up expelation should appear.
                                You can find the explanations on this link <a
                                    href="https://uk.iofc.org/sites/uk.iofc.org/files/tool_2_inner_compass_for_adult_educators_self-assessment_0.pdf">IofC
                                    UK</a>
                            </p>
                        </CardText>

                    </CardBody>
                </Card>
            </div>
        </Fragment>
    );
}
