import { DomainEvent } from '../../../../src/contexts/shared/DomainEvent'
import { EventBus } from '../../../../src/contexts/shared/EventBus'

export class EventBusMock implements EventBus {
  publishMock: jest.Mock

  constructor() {
    this.publishMock = jest.fn()
  }
  async publish(events: DomainEvent[]): Promise<void> {
    this.publishMock(events)
  }

  assertLastPublishedEventIs(expectedEvent: DomainEvent) {
    const publishSpyCalls = this.publishMock.mock.calls
    expect(publishSpyCalls.length).toBeGreaterThan(0)

    const lastPublishSpyCall = publishSpyCalls[publishSpyCalls.length - 1]
    const lastPublishedEvent = lastPublishSpyCall[0][0]

    console.log({
      publishSpyCalls,
      lastPublishSpyCall,
      lastPublishedEvent
    })

    const expected = this.getDataFromDomainEvent(expectedEvent)
    const published = this.getDataFromDomainEvent(lastPublishedEvent)

    expect(expected).toMatchObject(published)
  }

  private getDataFromDomainEvent(event: DomainEvent) {
    const { eventId, occurredOn, ...attributes } = event
    return attributes
  }
}
