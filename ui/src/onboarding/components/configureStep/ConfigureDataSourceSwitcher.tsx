// Libraries
import React, {PureComponent} from 'react'
import _ from 'lodash'

// Components
import {ErrorHandling} from 'src/shared/decorators/errors'
import LineProtocol from 'src/onboarding/components/configureStep/lineProtocol/LineProtocol'
import PluginConfigSwitcher from 'src/onboarding/components/configureStep/PluginConfigSwitcher'
import EmptyDataSourceState from 'src/onboarding/components/configureStep/EmptyDataSourceState'
import FetchAuthToken from 'src/onboarding/components/verifyStep/FetchAuthToken'

// Actions
import {
  updateTelegrafPluginConfig,
  addTelegrafPluginConfigFieldValue,
  removeTelegrafPluginConfigFieldValue,
  setTelegrafPluginAsync,
} from 'src/onboarding/actions/dataLoaders'

// Types
import {TelegrafPlugin, DataLoaderType} from 'src/types/v2/dataLoaders'

export interface Props {
  telegrafPlugins: TelegrafPlugin[]
  currentIndex: number
  onUpdateTelegrafPluginConfig: typeof updateTelegrafPluginConfig
  onAddTelegrafPluginConfigFieldValue: typeof addTelegrafPluginConfigFieldValue
  onRemoveTelegrafPluginConfigFieldValue: typeof removeTelegrafPluginConfigFieldValue
  onSaveTelegrafPlugin: typeof setTelegrafPluginAsync
  dataLoaderType: DataLoaderType
  bucket: string
  org: string
  username: string
}

@ErrorHandling
class ConfigureDataSourceSwitcher extends PureComponent<Props> {
  public render() {
    const {
      bucket,
      org,
      username,
      telegrafPlugins,
      currentIndex,
      dataLoaderType,
      onSaveTelegrafPlugin,
      onUpdateTelegrafPluginConfig,
      onAddTelegrafPluginConfigFieldValue,
      onRemoveTelegrafPluginConfigFieldValue,
    } = this.props

    switch (dataLoaderType) {
      case DataLoaderType.Streaming:
        return (
          <FetchAuthToken bucket={bucket} username={username}>
            {authToken => (
              <PluginConfigSwitcher
                onUpdateTelegrafPluginConfig={onUpdateTelegrafPluginConfig}
                onRemoveTelegrafPluginConfigFieldValue={
                  onRemoveTelegrafPluginConfigFieldValue
                }
                telegrafPlugins={telegrafPlugins}
                currentIndex={currentIndex}
                onAddTelegrafPluginConfigFieldValue={
                  onAddTelegrafPluginConfigFieldValue
                }
                onSaveTelegrafPlugin={onSaveTelegrafPlugin}
                authToken={authToken}
              />
            )}
          </FetchAuthToken>
        )
      case DataLoaderType.LineProtocol:
        return <LineProtocol bucket={bucket} org={org} />
      case DataLoaderType.CSV:
        return <div>{DataLoaderType.CSV}</div>
      default:
        return <EmptyDataSourceState />
    }
  }
}

export default ConfigureDataSourceSwitcher
