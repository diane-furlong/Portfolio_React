import React from 'react'

const Contact = () => {
    return (
        <div className="contactWrapper">
            <main className="container">
                <section className="row">
                    <div className="col-md-6">
                        <form className="block form-horizontal">
                            <h1 className="block-header">Contact</h1>
                            <hr />
                            <div className="form-group">
                                <label for="name" className="col-sm-2 control-label">Name</label>
                                <div className="col-sm-10">
                                <input type="email" className="form-control" id="name" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="email" className="col-sm-2 control-label">Email</label>
                                <div className="col-sm-10">
                                <input type="password" className="form-control" id="email" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label" for="msg">Message</label>
                                <div className="col-sm-10">
                                <textarea id="msg" className="form-control" rows="3" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <button className="submit-btn">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <form className="block">
                            <h1 className="block-header">Direct</h1>
                            <hr />
                            <div className="form-group">
                                <label for="name" className="col-sm-2 control-label">Phone</label>
                                <div className="col-sm-10">
                                <p className="form-control">440-488-1595</p>
                                </div>
                                <label for="name" className="col-sm-2 control-label">Email</label>
                                <div className="col-sm-10">
                                <p className="form-control">dfurlongm@gmail.com</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contact
