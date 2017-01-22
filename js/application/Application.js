import React from 'react';
import Table from './table/Table';

/**
 * Main application.
 */
export default class Application extends React.Component
{
    /**
     * Constructor.
     */
    constructor(props)
    {
        super(props);

        // Set state.
        this.state = {loaded: false};

        // Initialize data.
        this.data = null;

        // Get data.
        var request = new XMLHttpRequest();
        request.addEventListener('load', (event) => this.handleXHRLoad(event));
        request.open('GET', this.props.url);
        request.send();
    }


    /**
     * Handles XHR.
     */
    handleXHRLoad(event)
    {
        this.data = JSON.parse(event.currentTarget.response);
        this.setState({loaded: true});
    }

    /**
     * Render.
     */
    render()
    {
        if (this.state.loaded)
        {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="page-title">{this.props.title}</p>
                            <Table title="Secondary Levels" data={this.data} data_property="secondaryLevels"/>
                        </div>
                    </div>
                </div>
            );
        }
        else
        {
            return <div></div>;
        }
    }
}