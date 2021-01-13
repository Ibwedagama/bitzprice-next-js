import React, { Component } from 'react'

class Price extends Component {
	state = {
		currency: 'USD',
	}
	render() {
		let list = ''
		switch (this.state.currency) {
			case 'USD':
				list = (
					<div className='list-group-item'>
						<p>
							Current price for <span className='badge bg-primary'>{this.props.bpi.USD.code}</span>{' '}
							:{` `}
							<strong>{this.props.bpi.USD.rate}</strong>
						</p>
					</div>
				)
				break
			case 'EUR':
				list = (
					<div className='list-group-item'>
						<p>
							Current price for <span className='badge bg-primary'>{this.props.bpi.EUR.code}</span>{' '}
							:{` `}
							<strong>{this.props.bpi.EUR.rate}</strong>
						</p>
					</div>
				)
				break
			case 'GBP':
				list = (
					<div className='list-group-item'>
						<p>
							Current price for <span className='badge bg-primary'>{this.props.bpi.GBP.code}</span>{' '}
							:{` `}
							<strong>{this.props.bpi.GBP.rate}</strong>
						</p>
					</div>
				)
				break

			default:
				break
		}
		return (
			<div>
				<select
					className='form-select form-select-sm'
					onChange={(e) => this.setState({ currency: e.target.value })}
				>
					<option value='USD'>USD</option>
					<option value='EUR'>EUR</option>
					<option value='GBP'>GBP</option>
				</select>
				<br />
				{list}
			</div>
		)
	}
}

export default Price
