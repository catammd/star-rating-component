/**
 * Runs when observed properties change, e.g. @property or @state, but before the component updates. To wait for an
 * update to complete after a change occurs, use `await this.updateComplete` in the handler. To start watching after the
 * initial update/render, use `{ waitUntilFirstUpdate: true }` or `this.hasUpdated` in the handler.
 *
 * Usage:
 *
 * @watch('propName')
 * handlePropChange(oldValue, newValue) {
 *   ...
 * }
 */
export function watch(propertyName, options) {
    const resolvedOptions = {
        waitUntilFirstUpdate: false,
        ...options,
    };
    return (proto, decoratedFnName) => {
        // @ts-expect-error - update is a protected property
        const { update } = proto;
        const watchedProperties = Array.isArray(propertyName)
            ? propertyName
            : [propertyName];
        // @ts-expect-error - update is a protected property
        proto.update = function (changedProps) {
            watchedProperties.forEach((property) => {
                const key = property;
                if (changedProps.has(key)) {
                    const oldValue = changedProps.get(key);
                    const newValue = this[key];
                    if (oldValue !== newValue) {
                        if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                            this[decoratedFnName](oldValue, newValue);
                        }
                    }
                }
            });
            update.call(this, changedProps);
        };
    };
}
//# sourceMappingURL=watch.js.map