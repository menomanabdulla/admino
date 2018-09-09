import React from 'react';

const Accordion = () => {
    return(
        <div>
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="page-title-block">
                            <h4>Accordion</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#"><i className="ti-home"></i></a></li>
                                <li className="breadcrumb-item"><a href="#">Ui Elements</a></li>
                                <li className="breadcrumb-item active">Accordion</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="box-widget">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <h4>Multiple Open</h4>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="accordian-block">
                                            <div id="accordion1" className="accordian-common" role="tablist" aria-multiselectable="true">
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Collapsible Group Item 01 
                                                        </a>
                                                    </h5>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                                        <div className="card-block">
                                                            It is a long established fact that a reader will be distracted by the readable content
                                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingTwo">
                                                        <h5 className="mb-0">
                                                            <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Collapsible Group Item 02 
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                        <div className="card-block">
                                                            It is a long established fact that a reader will be distracted by the readable content
                                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                        <div className="card-header" role="tab" id="headingThree">
                                                        <h5 className="mb-0">
                                                            <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Collapsible Group Item 03
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                                                        <div className="card-block">
                                                            It is a long established fact that a reader will be distracted by the readable content
                                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/*-- accordian1 */}
                                        </div>
                                    </div>{/*--panel Body */}
                                </div>{/*--panel */}
                            </div>{/*-- widget-module */}
                        </div>
                        <div className="col-lg-6">
                            <div className="box-widget">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <h4>Single Open</h4>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="accordian-block">
                                            <div id="accordion2" className="accordian-common" role="tablist" aria-multiselectable="true">
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingFour">
                                                        <h5 className="mb-0">
                                                            <a data-toggle="collapse" data-parent="#accordion2" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                                Collapsible Group Item 01 
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseFour" className="collapse show" role="tabpanel" aria-labelledby="headingFour">
                                                        <div className="card-block">
                                                            It is a long established fact that a reader will be distracted by the readable content
                                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingFive">
                                                        <h5 className="mb-0">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                Collapsible Group Item 02
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseFive" className="collapse" role="tabpanel" aria-labelledby="headingFive">
                                                        <div className="card-block">
                                                            It is a long established fact that a reader will be distracted by the readable content
                                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                        <div className="card-header" role="tab" id="headingSix">
                                                        <h5 className="mb-0">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                Collapsible Group Item 03
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseSix" className="collapse" role="tabpanel" aria-labelledby="headingSix">
                                                        <div className="card-block">
                                                            It is a long established fact that a reader will be distracted by the readable content
                                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/*-- accordian2 */}
                                        </div>
                                    </div>{/*--panel Body */}
                                </div>{/*--panel */}
                            </div>{/*-- widget-module */}
                        </div>
                        <div className="col-lg-6">
                            <div className="box-widget">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <h4>Scale  Accordion</h4>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="accordian-block">
                                            <div id="accordion3" className="accordian-common scale-accordian" role="tablist" aria-multiselectable="true">
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingSeven">
                                                        <h5 className="mb-0">
                                                            <a data-toggle="collapse" data-parent="#accordion3" href="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                                                Collapsible Group Item 01
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseSeven" className="collapse show" role="tabpanel" aria-labelledby="headingSeven">
                                                        <div className="card-block">
                                                            It is a long established fact that a reader will be distracted by the readable content
                                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" role="tab" id="headingEight">
                                                        <h5 className="mb-0">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                                Collapsible Group Item 02
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseEight" className="collapse" role="tabpanel" aria-labelledby="headingEight">
                                                        <div className="card-block">
                                                            It is a long established fact that a reader will be distracted by the readable content
                                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                        <div className="card-header" role="tab" id="headingNine">
                                                        <h5 className="mb-0">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                                Collapsible Group Item 03
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseNine" className="collapse" role="tabpanel" aria-labelledby="headingNine">
                                                        <div className="card-block">
                                                            It is a long established fact that a reader will be distracted by the readable content
                                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/*-- accordian3 */}
                                        </div>
                                    </div>{/*--panel Body */}
                                </div>{/*--panel */}
                            </div>{/*-- widget-module */}
                        </div>
                        <div className="col-lg-6">
                            <div className="box-widget">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <h4>Color  Accordion</h4>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="accordian-block">
                                            <div id="accordion4" className="accordian-common color-accordian" role="tablist" aria-multiselectable="true">
                                                <div className="card has-primary">
                                                    <div className="card-header" role="tab" id="headingTen">
                                                        <h5 className="mb-0">
                                                            <a data-toggle="collapse" data-parent="#accordion4" href="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                                                                Collapsible Group Item 01 
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTen" className="collapse show" role="tabpanel" aria-labelledby="headingTen">
                                                        <div className="card-block">
                                                            It is a long established fact that a reader will be distracted by the readable content
                                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card has-info">
                                                    <div className="card-header" role="tab" id="headingEleben">
                                                        <h5 className="mb-0">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion4" href="#collapseEleben" aria-expanded="false" aria-controls="collapseEleben">
                                                                Collapsible Group Item 02
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseEleben" className="collapse" role="tabpanel" aria-labelledby="headingEleben">
                                                        <div className="card-block">
                                                            It is a long established fact that a reader will be distracted by the readable content
                                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card has-warning">
                                                        <div className="card-header" role="tab" id="headingTwelve">
                                                        <h5 className="mb-0">
                                                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion4" href="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                                                Collapsible Group Item 03
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwelve" className="collapse" role="tabpanel" aria-labelledby="headingTwelve">
                                                        <div className="card-block">
                                                            It is a long established fact that a reader will be distracted by the readable content
                                                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                                            a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                                            content here', making it look like readable English.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/*-- accordian4 */}
                                        </div>
                                    </div>{/*--panel Body */}
                                </div>{/*--panel */}
                            </div>{/*-- widget-module */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion