import {Title} from 'components/title';

export class Feature extends React.Component {
    Lazy = () => null;
    state = {
        lazyLoaded: false
    };

    render() {
        const Lazy = this.Lazy;
        const {lazyLoaded} = this.state;

        return (
            <section>
                <Title text="Main Feature"/>
                <h2>Feature Component</h2>

                <Conditional condition={lazyLoaded}>
                    <div className="card">
                        <small>Loaded the lazy!!</small>
                        <Lazy/>
                    </div>
                </Conditional>

                <Conditional condition={!lazyLoaded}>
                    <button className="btn btn-primary" onClick={this.loadLazy}>Load Lazy</button>
                </Conditional>


            </section>
        );

    }

    loadLazy = () => {
        require.ensure([], require => {
            this.Lazy = require('components/lazy').Lazy;
            this.setState({lazyLoaded: true});
        });
    };
}

function Conditional({condition, children}) {
    return condition ? children : null;
}